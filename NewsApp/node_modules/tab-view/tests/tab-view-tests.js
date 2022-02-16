'use strict';
var assert = require('assert');
var TestUtils = require('test-utils');
var TabView = require('./../src/tab-view');
var sinon = require('sinon');

describe('Tab View', function () {

    var defaultActivePanelClass = 'tab-panel-active';
    var defaultActiveButtonClass = 'tab-nav-item-active';


    it('should apply an active class to the navigation button clicked', function () {
        var navButtonHtml = '<div class="nav-btn" data-nav-id="a1"></div>' +
                            '<div class="nav-btn" data-nav-id="b2"></div>' +
                            '<div class="nav-btn" data-nav-id="c3"></div>';
        var navContainer = document.createElement('div');
        navContainer.innerHTML = navButtonHtml;
        var navBtns = navContainer.getElementsByClassName('nav-btn');
        var panelHtml = '<div class="panel" data-panel-id="a1"></div>' +
                        '<div class="panel" data-panel-id="b2"></div>' +
                        '<div class="panel" data-panel-id="c3"></div>';
        var panelContainer = document.createElement('div');
        panelContainer.innerHTML = panelHtml;
        var panels = panelContainer.getElementsByClassName('panel');

        var tabView = new TabView({
            buttons: navBtns,
            panels: panels
        });
        // click on second item
        navBtns[1].dispatchEvent(TestUtils.createEvent('click'));
        assert.ok(navBtns[1].classList.contains(defaultActiveButtonClass), 'active class was applied to navigation item when clicked');
        tabView.destroy();
    });

    it('should remove active class from a previous navigation item when another navigation item is clicked', function () {
        var navButtonHtml = '<div class="nav-btn" data-nav-id="a1"></div>' +
            '<div class="nav-btn" data-nav-id="b2"></div>' +
            '<div class="nav-btn" data-nav-id="c3"></div>';
        var navContainer = document.createElement('div');
        navContainer.innerHTML = navButtonHtml;
        var navBtns = navContainer.getElementsByClassName('nav-btn');
        var panelHtml = '<div class="panel" data-panel-id="a1"></div>' +
            '<div class="panel" data-panel-id="b2"></div>' +
            '<div class="panel" data-panel-id="c3"></div>';
        var panelContainer = document.createElement('div');
        panelContainer.innerHTML = panelHtml;
        var panels = panelContainer.getElementsByClassName('panel');

        var tabView = new TabView({
            buttons: navBtns,
            panels: panels
        });
        navBtns[1].dispatchEvent(TestUtils.createEvent('click'));
        navBtns[2].dispatchEvent(TestUtils.createEvent('click'));
        assert.ok(!navBtns[1].classList.contains(defaultActiveButtonClass), 'active class was removed from previous item when new one is clicked');
        assert.ok(navBtns[2].classList.contains(defaultActiveButtonClass), 'active class was applied to new item');
        tabView.destroy();
    });

    it('should apply and active panel class to the panel with the same id of the navigation item clicked', function () {
        var navButtonHtml = '<div class="nav-btn" data-nav-id="a1"></div>' +
            '<div class="nav-btn" data-nav-id="b2"></div>' +
            '<div class="nav-btn" data-nav-id="c3"></div>';
        var navContainer = document.createElement('div');
        navContainer.innerHTML = navButtonHtml;
        var navBtns = navContainer.getElementsByClassName('nav-btn');
        var panelHtml = '<div class="panel" data-panel-id="a1"></div>' +
            '<div class="panel" data-panel-id="b2"></div>' +
            '<div class="panel" data-panel-id="c3"></div>';
        var panelContainer = document.createElement('div');
        panelContainer.innerHTML = panelHtml;
        var panels = panelContainer.getElementsByClassName('panel');

        var tabView = new TabView({
            buttons: navBtns,
            panels: panels
        });
        navBtns[1].dispatchEvent(TestUtils.createEvent('click'));
        assert.ok(panels[1].classList.contains(defaultActivePanelClass), 'active class was applied to panel when navigation with the same id was clicked');
        tabView.destroy();
    });

    it('should remove active class from a previous panel item when another panel\'s navigation item is clicked', function () {
        var navButtonHtml = '<div class="nav-btn" data-nav-id="a1"></div>' +
            '<div class="nav-btn" data-nav-id="b2"></div>' +
            '<div class="nav-btn" data-nav-id="c3"></div>';
        var navContainer = document.createElement('div');
        navContainer.innerHTML = navButtonHtml;
        var navBtns = navContainer.getElementsByClassName('nav-btn');
        var panelHtml = '<div class="panel" data-panel-id="a1"></div>' +
            '<div class="panel" data-panel-id="b2"></div>' +
            '<div class="panel" data-panel-id="c3"></div>';
        var panelContainer = document.createElement('div');
        panelContainer.innerHTML = panelHtml;
        var panels = panelContainer.getElementsByClassName('panel');

        var tabView = new TabView({
            buttons: navBtns,
            panels: panels
        });
        navBtns[1].dispatchEvent(TestUtils.createEvent('click'));
        navBtns[2].dispatchEvent(TestUtils.createEvent('click'));
        assert.ok(!panels[1].classList.contains(defaultActivePanelClass), 'active class was removed from previous panel when new one is clicked');
        assert.ok(panels[2].classList.contains(defaultActivePanelClass), 'active class was applied to new panel');
        tabView.destroy();
    });

    it('should call onPanelChange callback when panel\'s navigation item is clicked', function () {
        var navButtonHtml = '<div class="nav-btn" data-nav-id="a1"></div>' +
            '<div class="nav-btn" data-nav-id="b2"></div>' +
            '<div class="nav-btn" data-nav-id="c3"></div>';
        var navContainer = document.createElement('div');
        navContainer.innerHTML = navButtonHtml;
        var navBtns = navContainer.getElementsByClassName('nav-btn');
        var panelHtml = '<div class="panel" data-panel-id="a1"></div>' +
            '<div class="panel" data-panel-id="b2"></div>' +
            '<div class="panel" data-panel-id="c3"></div>';
        var panelContainer = document.createElement('div');
        panelContainer.innerHTML = panelHtml;
        var panels = panelContainer.getElementsByClassName('panel');

        var panelChangeSpy = sinon.spy();
        var tabView = new TabView({
            buttons: navBtns,
            panels: panels,
            onPanelChange: panelChangeSpy
        });
        navBtns[1].dispatchEvent(TestUtils.createEvent('click'));
        var panelId = panels[1].getAttribute('data-panel-id');
        assert.deepEqual(panelChangeSpy.args[0], [panelId, panels[1]], 'onPanelChange was fired with correct parameters when clicking on a panels navigation item');
        tabView.destroy();
    });

    it('clicking a navigation item should call setActive() with panel id', function () {
        var navButtonHtml = '<div class="nav-btn" data-nav-id="a1"></div>' +
            '<div class="nav-btn" data-nav-id="b2"></div>' +
            '<div class="nav-btn" data-nav-id="c3"></div>';
        var navContainer = document.createElement('div');
        navContainer.innerHTML = navButtonHtml;
        var navBtns = navContainer.getElementsByClassName('nav-btn');
        var panelHtml = '<div class="panel" data-panel-id="a1"></div>' +
            '<div class="panel" data-panel-id="b2"></div>' +
            '<div class="panel" data-panel-id="c3"></div>';
        var panelContainer = document.createElement('div');
        panelContainer.innerHTML = panelHtml;
        var panels = panelContainer.getElementsByClassName('panel');
        var tabView = new TabView({
            buttons: navBtns,
            panels: panels
        });
        var setActiveSpy = sinon.spy(tabView, 'setActive');
        navBtns[1].dispatchEvent(TestUtils.createEvent('click'));
        assert.equal(setActiveSpy.args[0][0], panels[1].getAttribute('data-panel-id'), 'setActive() was passed correct panel id');
        setActiveSpy.restore();
        tabView.destroy();
    });

    it('calling setActive() with a panel id should set navigation button as active and associated panel', function () {
        var navButtonHtml = '<div class="nav-btn" data-nav-id="a1"></div>' +
            '<div class="nav-btn" data-nav-id="b2"></div>' +
            '<div class="nav-btn" data-nav-id="c3"></div>';
        var navContainer = document.createElement('div');
        navContainer.innerHTML = navButtonHtml;
        var navBtns = navContainer.getElementsByClassName('nav-btn');
        var panelHtml = '<div class="panel" data-panel-id="a1"></div>' +
            '<div class="panel" data-panel-id="b2"></div>' +
            '<div class="panel" data-panel-id="c3"></div>';
        var panelContainer = document.createElement('div');
        panelContainer.innerHTML = panelHtml;
        var panels = panelContainer.getElementsByClassName('panel');

        var tabView = new TabView({
            buttons: navBtns,
            panels: panels
        });
        tabView.setActive(panels[1].getAttribute('data-panel-id'));
        assert.ok(navBtns[1].classList.contains(defaultActiveButtonClass), 'active class was applied to navigation button');
        assert.ok(panels[1].classList.contains(defaultActivePanelClass), 'active class was added to panel');
        tabView.destroy();
    });
});