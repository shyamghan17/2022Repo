'use strict';

var Module = require('module.js');
var _ = require('underscore');
require('element-kit');

/**
 * @class TabView
 * @description A class that handles all interaction in the simulation media module
 * @extends Module
 */
var TabView = Module.extend({

    /**
     * Initializes the simulation media module.
     * @param options
     * @param {HTMLCollection|Array} options.panels - The panel elements
     * @param {HTMLCollection|Array} options.buttons - The button elements
     * @param {String} [options.buttonActiveClass] - The class to be applied when a navigation button is active
     * @param {String} [options.panelActiveClass] - The class to be applied when a panel is active
     * @param {Function} [options.onPanelChange] - When a new panel is shown
     */
    initialize: function (options) {
        Module.prototype.initialize.call(this);

        this.options = _.extend({
            buttons: [],
            panels: [],
            buttonActiveClass: 'tab-nav-item-active',
            panelActiveClass: 'tab-panel-active',
            onPanelChange: null
        }, options);

        // make array
        this.options.buttons = Array.prototype.slice.call(this.options.buttons);
        this.options.panels = Array.prototype.slice.call(this.options.panels);

        // set initially active states
        this._origActivePanel = this.activePanel = this.options.panels.filter(function (panel) {
            return panel.classList.contains(this.options.panelActiveClass);
        }.bind(this))[0];

        this._origActiveButton = this.activeButton = this.options.buttons.filter(function (btn) {
            return btn.classList.contains(this.options.buttonActiveClass);
        }.bind(this))[0];

        this.setup();
    },

    /**
     * Sets up navigation items.
     */
    setup: function () {
        this.options.buttons.forEach(function (btn) {
            btn.kit.addEventListener('click', 'onNavButtonClick', this);
        }.bind(this));
    },

    /**
     * Sets the panel and the navigation button to active state.
     * @param {string} id - The id of the panel and navigation item
     */
    setActive: function (id) {
        this.setActiveNavButton(id);
        this.setActivePanel(id);
    },

    /**
     * When a navigation button is clicked.
     * @param e
     */
    onNavButtonClick: function (e) {
        var id = e.currentTarget.getAttribute('data-nav-id');
        this.setActive(id);
    },

    /**
     * Sets navigation item as active.
     * @param {String} id - The new id of the item to set as active
     */
    setActiveNavButton: function (id) {
        var btn = this.getNavButtonById(id),
            activeClass = this.options.buttonActiveClass;

        if (this.activeButton !== btn) {
            btn.classList.add(activeClass);
            if (this.activeButton) {
                this.activeButton.classList.remove(activeClass);
            }
        }
        this.activeButton = btn;
    },

    /**
     * Gets a navigation button by id of its data attribute.
     * @param {String} id - The id of the item to retrieve
     * @returns {HTMLElement|undefined}
     */
    getNavButtonById: function (id) {
        return this.options.buttons.filter(function (btn) {
            return btn.getAttribute('data-nav-id') === id;
        })[0];
    },

    /**
     * Gets a panel by the id in its data attribute.
     * @param {String} id - The id desired
     * @returns {HTMLElement|undefined}
     */
    getPanelById: function (id) {
        return this.options.panels.filter(function (panel) {
            return panel.getAttribute('data-panel-id') === id;
        })[0];
    },

    /**
     * Sets a panel as active.
     * @param {String} id - The id of the panel to set
     */
    setActivePanel: function (id) {
        var panel = this.getPanelById(id),
            activeClass = this.options.panelActiveClass;

        if (this.activePanel !== panel) {

            if (!panel) {
                return console.error('TabView Error: There is no panel for the navigation item selected');
            }

            panel.classList.add(activeClass);
            if (this.activePanel) {
                this.activePanel.classList.remove(activeClass);
            }

            if (this.options.onPanelChange) {
                this.options.onPanelChange(id, panel);
            }
        }
        this.activePanel = panel;
    },

    /**
     * Destroys events and resets state.
     */
    destroy: function () {
        _.each(this.options.buttons, function (btn) {
            btn.kit.removeEventListener('click', 'onNavButtonClick', this);
        }.bind(this));

        if (this._origActivePanel) {
            this._origActivePanel.classList.add(this.options.panelActiveClass);
        }
        this.activePanel = null;

        if (this._origActiveButton) {
            this._origActiveButton.classList.add(this.options.buttonActiveClass);
        }
        this.activeButton = null;
        Module.prototype.destroy.call(this);
    }

});

module.exports = TabView;
