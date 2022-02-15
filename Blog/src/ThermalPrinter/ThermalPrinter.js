import {
    USBPrinter,
    NetPrinter,
    BLEPrinter,
  } from "react-native-thermal-receipt-printer";
  import {
    FlatList,
    Text,
    View,
    Button,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
  import React, { useState, useEffect } from "react";



const ThermalPrinter =()=>{


      const [printers, setPrinters] = useState([]);
      const [currentPrinter, setCurrentPrinter] = useState();
    
      useEffect(() => {
        BLEPrinter.init().then(()=> {
          BLEPrinter.getDeviceList().then(setPrinters);
        });
      }, []);
    
      _connectPrinter => (printer) => {
        //connect printer
        BLEPrinter.connectPrinter(printer.inner_mac_address).then(
          setCurrentPrinter,
          error => console.warn(error))
      }
    
   


    
      return (
        <View >
          {
            this.state.printers.map(printer => (
              <TouchableOpacity key={printer.inner_mac_address} onPress={() => _connectPrinter(printer)}>
                {`device_name: ${printer.device_name}, inner_mac_address: ${printer.inner_mac_address}`}
              </TouchableOpacity>
              ))
          }
          <TouchableOpacity onPress={() => {
        currentPrinter && USBPrinter.printText("<C>sample text</C>\n");
      }}>
            <Text>Print Text</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
        currentPrinter && USBPrinter.printBill("<C>sample bill</C>");
      }}>
            <Text>Print Bill Text</Text>
          </TouchableOpacity>
        </View>
      )
    }
  
    export default ThermalPrinter