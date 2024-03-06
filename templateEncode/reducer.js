// (function getFileDictionary() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', '../json/dictionary.json', true);
//     xhr.onload = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var jsonData = JSON.parse(xhr.responseText);
//             var lengthJsonData = JSON.parse(xhr.responseText).length;
//             for (var i = 0; i < lengthJsonData; i++) {
//                 Dictionary.push(jsonData[i]);
//             }
//             return Dictionary;
//         }
//     };
//     xhr.send();
// })();

// (function getFileFormat() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', '../json/format.json', true);
//     xhr.onload = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var jsonData = JSON.parse(xhr.responseText);
//             var lengthJsonData = JSON.parse(xhr.responseText).length;
//             for (var i = 0; i < lengthJsonData; i++) {
//                 Format.push(jsonData[i]);
//             }
//             return Format;
//         }
//     };
//     xhr.send();
// })();

const Dictionary = [
    {
        type: 'type',
        description: [
            { id: 8, name: 'C', alias: '%s' },
            { id: 8, name: 'U', alias: '%lu' },
            { id: 8, name: 'S', alias: '%ld' },
            { id: 32, name: 'F', alias: '%f' },
            { id: 64, name: 'D', alias: '%lf' },
            { id: 4, name: 'H', alias: '0x%s' },
            { id: 1, name: 'b', alias: '%lu' },
        ],
    },
    {
        type: 'app',
        description: [
            { id: 0, name: 'GENERAL' },
            { id: 1, name: 'GEO' },
            { id: 2, name: 'LYRECO' },
            { id: 3, name: 'ORANGE' },
            { id: 4, name: 'TRASH' },
            { id: 5, name: 'ACCO2' },
            { id: 6, name: 'FENCE' },
            { id: 7, name: 'GSO-BEA' },
            { id: 8, name: 'TILT-METER' },
            { id: 9, name: 'LTE' },
            { id: 10, name: 'BLE Mesh' },
            { id: 11, name: 'DQS' },
        ],
    },
    {
        type: 'frametype',
        description: [
            { id: 0, name: 'Information' },
            { id: 1, name: 'Reference Value' },
            { id: 2, name: 'Keep Alive' },
            { id: 3, name: 'User Frame' },
            { id: 4, name: 'Alarm' },
            { id: 5, name: 'Check Error' },
            { id: 6, name: 'Result Test' },
            { id: 7, name: 'Alarm Motion' },
            { id: 8, name: 'Uplink Daily' },
            { id: 9, name: 'HMI Trigger' },
            { id: 10, name: 'Alarm Relay' },
            { id: 11, name: 'Alarm Relay Network' },
            { id: 12, name: 'Alarm FW Update' },
            { id: 13, name: 'Alarm Supply' },
        ],
    },
    {
        type: 'device',
        description: [
            { id: 0, name: 'System', alias: 'SYS' },
            { id: 1, name: 'GPS', alias: 'GPS' },
            { id: 2, name: 'Accelerometer', alias: 'ACL' },
            { id: 3, name: 'Memory', alias: 'MEM' },
            { id: 4, name: 'LoRaWan', alias: 'LOR' },
            { id: 5, name: 'Battery', alias: 'BAT' },
            { id: 6, name: 'Distance', alias: 'DIS' },
            { id: 7, name: 'NFC', alias: 'NFC' },
            { id: 8, name: 'AirEnvironment', alias: 'AIR' },
            { id: 9, name: 'BLE', alias: 'BLE' },
            { id: 10, name: 'Temperature', alias: 'TEM' },
            { id: 11, name: 'LTE', alias: 'LTE' },
            { id: 12, name: 'Schedule', alias: 'SCH' },
            { id: 13, name: 'MagSensor', alias: 'MAG' },
            { id: 14, name: 'FlowSensor', alias: 'FLW' },
            { id: 15, name: 'BLE-Mesh', alias: 'BLM' },
            { id: 16, name: 'Light', alias: 'LGT' },
            { id: 101, name: 'Serial', alias: 'SER' },
            { id: 253, name: 'Led', alias: 'LED' },
            { id: 254, name: 'Button', alias: 'BUT' },
        ],
    },
    {
        type: 'mode',
        description: [
            { id: 0, name: 'Read' },
            { id: 0, name: 'Message' },
            { id: 1, name: 'Write' },
            { id: 1, name: 'Request' },
            { id: 2, name: 'ACK' },
            { id: 3, name: 'Response' },
        ],
    },
    {
        type: 'ALL',
        description: [
            { id: 0, name: 'Frame Error' },
            { id: 63, name: 'Error' },
        ],
    },
    {
        type: 'System',
        description: [
            { id: 0, name: 'Information' },
            { id: 1, name: 'KeepAlive Periodic' },
            { id: 2, name: 'Area Operation' },
            { id: 3, name: 'Profile Using' },
            { id: 4, name: 'Codec' },
            { id: 5, name: 'Time' },
            { id: 6, name: 'Shutdown' },
            { id: 7, name: 'Edit Profile' },
            { id: 8, name: 'Profile' },
            { id: 9, name: 'Reset Factory' },
            { id: 10, name: 'Keep Alive Data' },
            { id: 11, name: 'Instant Measurement' },
            { id: 12, name: 'Re-Join LoRa' },
            { id: 13, name: 'Reference Data' },
            { id: 14, name: 'Goto Stock Mode' },
            { id: 15, name: 'Reset Parameters' },
            { id: 16, name: 'Alarm Mask' },
            { id: 17, name: 'Rejoin Periodic' },
            { id: 18, name: 'Active Product' },
            { id: 19, name: 'Avoid Passive Periodic' },
            { id: 20, name: 'Valid Product' },
            { id: 21, name: 'Log Event' },
            { id: 22, name: 'Reset Device' },
            { id: 23, name: 'Reset Log Event' },
            { id: 24, name: 'SysData' },
            { id: 25, name: 'Measure Period' },
            { id: 26, name: 'Alarm Threshold' },
            { id: 27, name: 'Relay Control' },
            { id: 28, name: 'Power Off Alert' },
            { id: 29, name: 'Force Measure' },
            { id: 30, name: 'Control Source' },
            { id: 31, name: 'Reset Module' },
            { id: 32, name: 'Update_FW' },
            { id: 33, name: 'Update Progress' },
            { id: 35, name: 'Reset Infor' },
        ],
    },
    {
        type: 'GPS',
        description: [
            { id: 1, name: 'Data' },
            { id: 2, name: 'Setting' },
        ],
    },
    {
        type: 'Accelerometer',
        description: [
            { id: 1, name: 'Data' },
            { id: 2, name: 'Setting' },
        ],
    },
    {
        type: 'Memory',
        description: [],
    },
    {
        type: 'LoRaWan',
        description: [
            { id: 1, name: 'Data' },
            { id: 2, name: 'Setting' },
            { id: 4, name: 'Dual Config' },
            { id: 6, name: 'Change DevEUI' },
        ],
    },
    {
        type: 'Battery',
        description: [
            { id: 1, name: 'Data' },
            { id: 2, name: 'Setting' },
            { id: 4, name: 'Battery Debug' },
        ],
    },
    {
        type: 'Distance',
        description: [
            { id: 1, name: 'Data' },
            { id: 2, name: 'Setting' },
        ],
    },
    {
        type: 'BLE',
        description: [
            { id: 1, name: 'Data' },
            { id: 2, name: 'Setting' },
            { id: 3, name: 'Disable' },
        ],
    },
    {
        type: 'Temperature',
        description: [{ id: 1, name: 'Data' }],
    },
    {
        type: 'LTE',
        description: [
            { id: 1, name: 'Data' },
            { id: 5, name: 'Direct Data' },
            { id: 6, name: 'Test Mode' },
            { id: 7, name: 'Mqtt Setting' },
            { id: 9, name: 'Change Connect' },
            { id: 10, name: 'Operator Status' },
            { id: 11, name: 'Mqtt KeepAlive Interval' },
            { id: 12, name: 'SSL Key URL' },
            { id: 13, name: 'Mqtt SSL' },
            { id: 14, name: 'Module Version' },
            { id: 15, name: 'Set Endpoint' },
            { id: 17, name: 'Active Profile' },
            { id: 18, name: 'Read Profile' },
            { id: 19, name: 'Read All Profiles' },
            { id: 20, name: 'DFOTA' },
            { id: 21, name: 'DFOTA Result' },
            { id: 31, name: 'Reset' },
        ],
    },
    {
        type: 'Schedule',
        description: [
            { id: 1, name: 'Delete Activity' },
            { id: 2, name: 'Setting' },
        ],
    },
    {
        type: 'MagSensor',
        description: [
            { id: 1, name: 'Data' },
            { id: 2, name: 'Setting' },
        ],
    },
    {
        type: 'FlowSensor',
        description: [
            { id: 1, name: 'Data' },
            { id: 2, name: 'Setting' },
        ],
    },
    {
        type: 'BLE-Mesh',
        description: [{ id: 1, name: 'Data' }],
    },
    {
        type: 'Light',
        description: [
            { id: 7, name: 'Dimmer' },
            { id: 9, name: 'Turning' },
        ],
    },
    {
        type: 'Serial',
        description: [{ id: 2, name: 'Setting' }],
    },
    {
        type: 'Button',
        description: [{ id: 2, name: 'Setting' }],
    },
    {
        type: 'frame error',
        description: [{ id: 255, name: 'Invalid' }],
    },
    {
        type: 'error',
        description: [
            { id: 1, name: 'DEV' },
            { id: 2, name: 'DRI' },
            { id: 4, name: 'COM' },
            { id: 8, name: 'TIM' },
            { id: 16, name: 'SEN' },
            { id: 32, name: 'MEM' },
            { id: 64, name: 'MEA' },
            { id: 128, name: 'REV' },
        ],
    },
    {
        type: 'area',
        description: [
            { id: 0, name: 'Stock' },
            { id: 1, name: 'Unknown' },
            { id: 2, name: 'Define' },
            { id: 3, name: 'Test' },
            { id: 4, name: 'USER_0' },
            { id: 5, name: 'USER_1' },
        ],
    },
    {
        type: 'frequency',
        description: [
            { id: 0, name: 'Oneshot' },
            { id: 1, name: 'Secondly' },
            { id: 2, name: 'Minutely' },
            { id: 3, name: 'Hourly' },
            { id: 4, name: 'Daily' },
            { id: 5, name: 'Weekly' },
            { id: 6, name: 'Monthly' },
            { id: 7, name: 'Yearly' },
        ],
    },
    {
        type: 'codec',
        description: [
            { id: 0, name: 'None' },
            { id: 1, name: 'CayenneLPP' },
            { id: 2, name: 'OrangePE' },
            { id: 3, name: 'Default' },
        ],
    },
    {
        type: 'filter',
        description: [
            { id: 1, name: 'Kalman' },
            { id: 2, name: 'Kalman & Average' },
            { id: 3, name: 'Average' },
        ],
    },
    {
        type: 'DevEUI Type',
        description: [
            { id: 0, name: 'MCU' },
            { id: 1, name: 'Supplier' },
            { id: 2, name: 'UserDefined' },
            { id: 3, name: 'EEPROM' },
        ],
    },
    {
        type: 'yesno',
        description: [
            { id: 0, name: 'No' },
            { id: 1, name: 'Yes' },
        ],
    },
    {
        type: 'network',
        description: [
            { id: 1, name: 'IFAC' },
            { id: 2, name: 'WAN' },
        ],
    },
    {
        type: 'rtc updated',
        description: [
            { id: 0, name: 'Empty' },
            { id: 1, name: 'By Setting' },
            { id: 2, name: 'By GPS' },
            { id: 3, name: 'By Last Event' },
            { id: 4, name: 'By LTE' },
        ],
    },
    {
        type: 'reference',
        description: [
            { id: 1, name: 'Read' },
            { id: 2, name: 'Take' },
        ],
    },
    {
        type: 'event option',
        description: [
            { id: 1, name: 'Read All' },
            { id: 2, name: 'By Time' },
            { id: 3, name: 'By Last Day' },
            { id: 4, name: 'By Event Type' },
        ],
    },
    {
        type: 'event type',
        description: [
            { id: 1, name: 'STARTUP' },
            { id: 2, name: 'CHANGE_PROFILE' },
            { id: 3, name: 'PROCESS_TASK' },
            { id: 4, name: 'ACTIVATE' },
            { id: 5, name: 'DEACTIVATE' },
            { id: 6, name: 'MEASURE' },
            { id: 7, name: 'SETTING' },
            { id: 8, name: 'CONTROL' },
            { id: 9, name: 'HMI' },
            { id: 10, name: 'CONNECT' },
            { id: 11, name: 'DISCONNECT' },
            { id: 12, name: 'COMMUNICATE' },
            { id: 13, name: 'ALARM' },
            { id: 14, name: 'ACKNOWLEDGE' },
        ],
    },
    {
        type: 'event fail',
        description: [
            { id: 0, name: 'No event yet' },
            { id: 255, name: 'Radio not allowed' },
        ],
    },
    {
        type: 'distance mode',
        description: [
            { id: 1, name: 'Average' },
            { id: 2, name: 'Average Plus' },
        ],
    },
    {
        type: 'onoff',
        description: [
            { id: 0, name: 'OFF' },
            { id: 1, name: 'ON' },
        ],
    },
    {
        type: 'day of week',
        description: [
            { id: 0, name: 'Sunday' },
            { id: 1, name: 'Monday' },
            { id: 2, name: 'Tuesday' },
            { id: 3, name: 'Wednesday' },
            { id: 4, name: 'Thursday' },
            { id: 5, name: 'Friday' },
            { id: 6, name: 'Saturday' },
            { id: 255, name: 'Everyday' },
        ],
    },
    {
        type: 'action',
        description: [
            { id: 0, name: 'Relay OFF' },
            { id: 1, name: 'Relay On' },
        ],
    },
    {
        type: 'reset source',
        description: [
            { id: 0, name: ' ' },
            { id: 1, name: 'Button' },
            { id: 2, name: 'Command' },
            { id: 3, name: 'Schedule' },
            { id: 4, name: 'Assert' },
            { id: 5, name: 'Subscribe fail' },
            { id: 6, name: 'Connecter' },
        ],
    },
    {
        type: 'reset type',
        description: [
            { id: 0, name: 'Power On' },
            { id: 1, name: 'Lost Connection Network' },
            { id: 2, name: 'Reset LTE' },
            { id: 4, name: 'Reset Device' },
            { id: 8, name: 'Reset Factory' },
            { id: 16, name: 'Reset Update FW' },
            { id: 32, name: 'Reset Mqtt by peer' },
            { id: 64, name: 'Reset Mqtt ping fail' },
            { id: 128, name: 'Connection is closed' },
            { id: 256, name: '' },
            { id: 512, name: '' },
            { id: 1024, name: '' },
            { id: 2048, name: '' },
        ],
    },
    {
        type: 'mqtt server',
        description: [
            { id: 0, name: 'Ifactory' },
            { id: 1, name: 'Orange' },
        ],
    },
    {
        type: 'openclose',
        description: [
            { id: 0, name: 'Close' },
            { id: 1, name: 'Open' },
        ],
    },
    {
        type: 'status',
        description: [
            { id: 0, name: 'OK' },
            { id: 1, name: 'Write Success' },
            { id: 2, name: 'Download File Fail' },
            { id: 3, name: 'Read File Fail' },
            { id: 4, name: 'Bad File' },
            { id: 5, name: 'Write File Fail' },
            { id: 255, name: 'Unknown Fail' },
        ],
    },
    {
        type: 'lteop name format',
        description: [
            { id: 0, name: 'long alphanumeric' },
            { id: 1, name: 'short alphanumeric' },
            { id: 2, name: 'numeric' },
        ],
    },
    {
        type: 'array status',
        description: [
            { id: 0, name: 'success' },
            { id: 1, name: 'empty' },
            { id: 255, name: 'fail' },
        ],
    },
    {
        type: 'typePowerOn',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Power On, ' },
        ],
    },
    {
        type: 'typeCmdResetDevice',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Cmd Reset Device, ' },
        ],
    },
    {
        type: 'typeCmdResetLTE',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Cmd Reset LTE, ' },
        ],
    },
    {
        type: 'typeButtonResetMqtt',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Button Reset Mqtt, ' },
        ],
    },
    {
        type: 'typeButtonResetFactory',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Button Reset Factory, ' },
        ],
    },
    {
        type: 'typeButtonResetDevice',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Button Reset Device, ' },
        ],
    },
    {
        type: 'typeButtonResetLTE',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Button Reset LTE, ' },
        ],
    },
    {
        type: 'typeResetUpgrade',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Reset Upgrade, ' },
        ],
    },
    {
        type: 'typeMqttResetByPeer',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Mqtt Reset By Peer, ' },
        ],
    },
    {
        type: 'typeMqttPingTimeout',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Mqtt Ping Timeout, ' },
        ],
    },
    {
        type: 'typeResetController',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Reset Controller, ' },
        ],
    },
    {
        type: 'typeLostNetwork',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Lost Network, ' },
        ],
    },
    {
        type: 'typeMqttCheck',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Mqtt Check, ' },
        ],
    },
    {
        type: 'typeCmdResetFactory',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Cmd Reset Factory, ' },
        ],
    },
    {
        type: 'typeMQTTSendingCONNECTFail',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'MQTT Sending CONNECT Fail, ' },
        ],
    },
    {
        type: 'typeReceiveCONACKFail',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'MQTT Receiving CONNACK timeout, ' },
        ],
    },
    {
        type: 'typeServerIsInitiativeToClose',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Server Is Initiative To Close, ' },
        ],
    },
    {
        type: 'typePacketSendingFailure',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'MQTT Packet Sending Failure, ' },
        ],
    },
    {
        type: 'typeMQTTLink',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Link or server is unavailable, ' },
        ],
    },
    {
        type: 'typeHardFault',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Hard Fault, ' },
        ],
    },
    {
        type: 'typeSubscribe',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Subscribe fail' },
        ],
    },
    {
        type: 'typeModuleSuccess',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Update Module Success, ' },
        ],
    },
    {
        type: 'typeModuleFailed',
        description: [
            { id: 0, name: '' },
            { id: 1, name: 'Update Module Failed, ' },
        ],
    },
];
const Format = [
    {
        app: 'GENERAL',
        device: 'ALL',
        cmd: 'Frame Error',
        infor: [{ mode: 'Response', length: 1 }],
        description: [
            {
                parameter: 'Status',
                access: ['Response'],
                attribute: [{ type: 'U', size: 1, enum: 'frame error' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'ALL',
        cmd: 'Error',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'Status',
                access: ['Message'],
                attribute: [{ type: 'U', size: 1, enum: 'error' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Information',
        infor: [{ mode: 'Message', length: 19 }],
        description: [
            {
                parameter: 'Dev EUI',
                access: ['Message'],
                attribute: [{ type: 'H', size: 16 }],
            },
            {
                parameter: 'Firmware VER',
                access: ['Message'],
                format: '%u.%u.%u',
                attribute: [
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                ],
            },
            {
                parameter: 'Hardware VER',
                access: ['Message'],
                format: '%u.%u.%u',
                attribute: [
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                ],
            },
            {
                parameter: 'MCUEUI',
                access: ['Message'],
                attribute: [{ type: 'H', size: 16 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LoRaWan',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 8 }],
        description: [
            {
                parameter: 'NetID',
                access: ['Message'],
                format: '0x%06X',
                attribute: [{ type: 'b', size: 24 }],
            },
            {
                parameter: 'AppNonce',
                access: ['Message'],
                format: '0x%06X',
                attribute: [{ type: 'b', size: 24 }],
            },
            {
                parameter: 'DevNonce',
                access: ['Message'],
                format: '0x%04X',
                attribute: [{ type: 'b', size: 16 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'SysData',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'RTC Updated',
                access: ['Message'],
                attribute: [{ type: 'U', size: 1, enum: 'rtc updated' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Alarm Mask',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'reserved',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Motion Detected',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'LowBattery Detected',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 5 }],
            },
        ],
    },
    {
        app: 'FENCE',
        device: 'System',
        cmd: 'Alarm Mask',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'GeoFencing Detected',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Motion Detected',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'LowBattery Detected',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'HighVoltage Detected',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'HighVoltage Unstable',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'HighVoltage LowValue',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 2 }],
            },
        ],
    },
    {
        app: 'TILT-METER',
        device: 'System',
        cmd: 'Alarm Mask',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'Reserve',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Shock Detected',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Reserve',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 2 }],
            },
            {
                parameter: 'Angle Detected',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Reserve',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 3 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Information',
        infor: [{ mode: 'Message', length: 7 }],
        description: [
            {
                parameter: 'Firmware VER',
                access: ['Message'],
                format: '%u.%u.%u',
                attribute: [
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                ],
            },
            {
                parameter: 'Hardware VER',
                access: ['Message'],
                format: '%u.%u.%u',
                attribute: [
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                ],
            },
            {
                parameter: 'Restart',
                access: ['Message'],
                format: '%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s%s',
                attribute: [
                    { type: 'b', size: 1, enum: 'typePowerOn' },
                    { type: 'b', size: 1, enum: 'typeCmdResetDevice' },
                    { type: 'b', size: 1, enum: 'typeCmdResetLTE' },
                    { type: 'b', size: 1, enum: 'typeButtonResetMqtt' },
                    { type: 'b', size: 1, enum: 'typeButtonResetFactory' },
                    { type: 'b', size: 1, enum: 'typeButtonResetDevice' },
                    { type: 'b', size: 1, enum: 'typeButtonResetLTE' },
                    { type: 'b', size: 1, enum: 'typeResetUpgrade' },
                    { type: 'b', size: 1, enum: 'typeMqttResetByPeer' },
                    { type: 'b', size: 1, enum: 'typeMqttPingTimeout' },
                    { type: 'b', size: 1, enum: 'typeResetController' },
                    { type: 'b', size: 1, enum: 'typeLostNetwork' },
                    { type: 'b', size: 1, enum: 'typeMqttCheck' },
                    { type: 'b', size: 1, enum: 'typeCmdResetFactory' },
                    { type: 'b', size: 1, enum: 'typeMQTTSendingCONNECTFail' },
                    { type: 'b', size: 1, enum: 'typeReceiveCONACKFail' },
                    {
                        type: 'b',
                        size: 1,
                        enum: 'typeServerIsInitiativeToClose',
                    },
                    { type: 'b', size: 1, enum: 'typePacketSendingFailure' },
                    { type: 'b', size: 1, enum: 'typeMQTTLink' },
                    { type: 'b', size: 1, enum: 'typeSubscribe' },
                    { type: 'b', size: 1, enum: 'typeHardFault' },
                    { type: 'b', size: 1, enum: 'typeModuleSuccess' },
                    { type: 'b', size: 1, enum: 'typeModuleFailed' },
                ],
            },
            {
                parameter: 'Reserve',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 10 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Power Off Alert',
        infor: [{ mode: 'Message', length: 16 }],
        description: [
            {
                parameter: 'Power off possible at',
                access: ['Message'],
                attribute: [{ type: 'U', size: 8 }],
            },
            {
                parameter: 'Power on at',
                access: ['Message'],
                attribute: [{ type: 'U', size: 8 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Control Source',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'Source',
                access: ['Message'],
                formular: '%s',
                attribute: [{ type: 'U', size: 1, enum: 'reset source' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Update Progress',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'Percent',
                access: ['Message'],
                formular: '%d',
                attribute: [{ type: 'U', size: 1, range: [1, 100] }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Reset Infor',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'Reset Infor',
                access: ['Message'],
                format: '%s%s',
                attribute: [
                    { type: 'b', size: 4, enum: 'reset source' },
                    { type: 'b', size: 4, enum: 'reset type' },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'KeepAlive Periodic',
        infor: [
            { mode: 'Read', length: 1 },
            { mode: 'Write', length: 7 },
            { mode: 'Response', length: 7 },
        ],
        description: [
            {
                parameter: 'Area',
                access: ['Read', 'Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'area' }],
            },
            {
                parameter: 'Frequency',
                access: ['Write', 'Response'],
                format: '%s: %u - %s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Area Operation',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 12 },
            { mode: 'Response', length: 12 },
        ],
        description: [
            {
                parameter: 'Latitude',
                access: ['Write', 'Response'],
                attribute: [{ type: 'S', size: 4 }],
            },
            {
                parameter: 'Longtitude',
                access: ['Write', 'Response'],
                attribute: [{ type: 'S', size: 4 }],
            },
            {
                parameter: 'Range',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 4 }],
            },
        ],
    },
    {
        app: 'FENCE',
        device: 'System',
        cmd: 'Area Operation',
        infor: [
            { mode: 'Read', length: 1 },
            { mode: 'Write', length: 13 },
            { mode: 'Response', length: 13 },
        ],
        description: [
            {
                parameter: 'Profile',
                access: ['Read', 'Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'area' }],
            },
            {
                parameter: 'Latitude',
                access: ['Write', 'Response'],
                attribute: [{ type: 'S', size: 4 }],
            },
            {
                parameter: 'Longtitude',
                access: ['Write', 'Response'],
                attribute: [{ type: 'S', size: 4 }],
            },
            {
                parameter: 'Range (m)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 31 }],
            },
            {
                parameter: 'Activate Geo-Fencing',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Profile Using',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Profile',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'area' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Codec',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Codec',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'codec' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Time',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 8 },
            { mode: 'Response', length: 8 },
            { mode: 'Message', length: 8 },
        ],
        description: [
            {
                parameter: 'Unix timestamp',
                access: ['Message', 'Write', 'Response'],
                attribute: [{ type: 'U', size: 8 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Shutdown',
        infor: [{ mode: 'Request', length: 0 }],
        description: [],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Profile',
        infor: [
            { mode: 'Read', length: 1 },
            { mode: 'Write', length: 11 },
            { mode: 'Response', length: 11 },
        ],
        description: [
            {
                parameter: 'Area',
                access: ['Read', 'Write', 'Response'],
                attribute: [
                    { type: 'U', size: 1, enum: 'area', range: [0, 5] },
                ],
            },
            {
                parameter: 'Keep Alive periodly',
                access: ['Write', 'Response'],
                format: '%s: %u - %s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
            {
                parameter: 'Alarm periodly',
                access: ['Write', 'Response'],
                format: '%s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
            {
                parameter: 'Alarm Retry',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'ACCO2',
        device: 'System',
        cmd: 'Profile',
        infor: [
            { mode: 'Read', length: 1 },
            { mode: 'Write', length: 15 },
            { mode: 'Response', length: 15 },
        ],
        description: [
            {
                parameter: 'Area',
                access: ['Read', 'Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'area' }],
            },
            {
                parameter: 'Uplink KA Frequency',
                access: ['Write', 'Response'],
                format: '%s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
            {
                parameter: 'Measurement Frequency',
                access: ['Write', 'Response'],
                format: '%s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
            {
                parameter: 'Uplink daily at time',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 8, option: ['timestamp'] }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Reset Factory',
        infor: [{ mode: 'Request', length: 0 }],
        description: [],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Keep Alive Data',
        infor: [
            { mode: 'Read', length: 1 },
            { mode: 'Write', length: 3 },
            { mode: 'Response', length: 3 },
        ],
        description: [
            {
                parameter: 'Profile',
                access: ['Read', 'Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'area' }],
            },
            {
                parameter: 'reserved',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'GPS Data Masking',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'ACCL Data Masking',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Battery Data Masking',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Distance Data Masking',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'NFC Data Masking',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'CO2 Data Masking',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'BLE Data Masking',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 6 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Instant Measurement',
        infor: [{ mode: 'Request', length: 2 }],
        description: [
            {
                parameter: 'Enable save as Data Ref',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'GPS Data Masking',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'ACCL Data Masking',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Request'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Request'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Battery Data Masking',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Distance Data Masking',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'NFC Data Masking',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'CO2 Data Masking',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Request'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 7 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Re-Join LoRa',
        infor: [{ mode: 'Request', length: 0 }],
        description: [],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Reference Data',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Enable save as Data Ref',
                access: ['Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'GPS measuament',
                access: ['Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'ACL measuament',
                access: ['Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Battery measuament',
                access: ['Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Distance measuament',
                access: ['Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Reserved',
                access: ['Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 3 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Goto Stock Mode',
        infor: [{ mode: 'Request', length: 0 }],
        description: [],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Reset Parameters',
        infor: [{ mode: 'Request', length: 0 }],
        description: [],
    },
    {
        app: 'FENCE',
        device: 'System',
        cmd: 'Alarm Mask',
        infor: [{ mode: 'Request', length: 1 }],
        description: [
            {
                parameter: 'GeoFencing Acknowledge',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Motion Acknowledge',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'LowBattery Acknowledge',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'HighVoltage Acknowledge',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Unstable Acknowledge',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'LowValue Acknowledge',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Request'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 2 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Rejoin Periodic',
        infor: [{ mode: 'Request', length: 3 }],
        description: [
            {
                parameter: 'Rejoin periodly',
                access: ['Request'],
                format: '%s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Active Product',
        infor: [{ mode: 'Request', length: 1 }],
        description: [
            {
                parameter: 'Activate flag',
                access: ['Request'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Avoid Passive Periodic',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 3 },
            { mode: 'Response', length: 3 },
        ],
        description: [
            {
                parameter: 'Passive Battery periodly',
                access: ['Write', 'Response'],
                format: '%s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Valid Product',
        infor: [{ mode: 'Request', length: 1 }],
        description: [
            {
                parameter: 'Validate flag',
                access: ['Request'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Log Event',
        infor: [{ mode: 'Read', length: 1 }],
        description: [
            {
                parameter: 'Option',
                access: ['Read'],
                attribute: [{ type: 'U', size: 1, enum: 'event option' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Log Event',
        infor: [{ mode: 'Read', length: 6 }],
        description: [
            {
                parameter: 'Option',
                access: ['Read'],
                attribute: [{ type: 'U', size: 1, enum: 'event option' }],
            },
            {
                parameter: 'Number of Day',
                access: ['Read'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Start Date',
                access: ['Read'],
                attribute: [{ type: 'U', size: 4, option: ['timestamp'] }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Log Event',
        infor: [{ mode: 'Read', length: 2 }],
        description: [
            {
                parameter: 'Option',
                access: ['Read'],
                attribute: [{ type: 'U', size: 1, enum: 'event option' }],
            },
            {
                parameter: 'Event Type',
                access: ['Read'],
                attribute: [{ type: 'U', size: 1, enum: 'event type' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Log Event',
        infor: [{ mode: 'Response', length: 2 }],
        description: [
            {
                parameter: 'Option',
                access: ['Response'],
                attribute: [{ type: 'U', size: 1, enum: 'event option' }],
            },
            {
                parameter: 'Fail',
                access: ['Response'],
                attribute: [{ type: 'U', size: 1, enum: 'event fail' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Log Event',
        infor: [{ mode: 'Response', length: 6 }],
        option: ['event'],
        description: [
            {
                parameter: 'Option',
                access: ['Response'],
                attribute: [{ type: 'U', size: 1, enum: 'event option' }],
            },
            {
                parameter: 'Count',
                access: ['Response'],
                attribute: [{ type: 'U', size: 4 }],
            },
            {
                parameter: 'Event',
                access: ['Response'],
                option: ['event'],
                format: '{%s}',
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Reset Device',
        infor: [{ mode: 'Request', length: 1 }],
        description: [
            {
                parameter: 'Minutes',
                access: ['Request'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Reset Log Event',
        infor: [{ mode: 'Request', length: 0 }],
        description: [],
    },
    {
        app: 'TILT-METER',
        device: 'System',
        cmd: 'Alarm Mask',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 11 },
            { mode: 'Response', length: 11 },
        ],
        description: [
            {
                parameter: 'Reserve',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Shock Detect',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Reserve',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 2 }],
            },
            {
                parameter: 'Angle Detect',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Reserve',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 3 }],
            },
            {
                parameter: 'Angle Threshold',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, range: [1, 89] }],
            },
            {
                parameter: 'Alarm Period',
                access: ['Write', 'Response'],
                format: '%s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
            {
                parameter: 'Observation Period',
                access: ['Write', 'Response'],
                format: '%s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
            {
                parameter: 'Accelerometer Sensibility',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, range: [1, 127] }],
            },
            {
                parameter: 'Retry Confirmed',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
        ],
    },
    {
        app: 'TILT-METER',
        device: 'System',
        cmd: 'Alarm Mask',
        infor: [{ mode: 'Request', length: 1 }],
        description: [
            {
                parameter: 'Reserve',
                access: ['Request'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Shock Alert Acknowledge',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Reserve',
                access: ['Request'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 2 }],
            },
            {
                parameter: 'Angle Alert Acknowledge',
                access: ['Request'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Reserve',
                access: ['Request'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 3 }],
            },
        ],
    },
    {
        app: 'TILT-METER',
        device: 'System',
        cmd: 'Reference Data',
        infor: [
            { mode: 'Read', length: 1 },
            { mode: 'Write', length: 6 },
            { mode: 'Response', length: 6 },
        ],
        description: [
            {
                parameter: 'Read/Take Reference',
                access: ['Read'],
                attribute: [{ type: 'U', size: 1, enum: 'reference' }],
            },
            {
                parameter: 'X',
                access: ['Write', 'Response'],
                attribute: [{ type: 'S', size: 2, range: [-2048, 2047] }],
            },
            {
                parameter: 'Y',
                access: ['Write', 'Response'],
                attribute: [{ type: 'S', size: 2, range: [-2048, 2047] }],
            },
            {
                parameter: 'Z',
                access: ['Write', 'Response'],
                attribute: [{ type: 'S', size: 2, range: [-2048, 2047] }],
            },
        ],
    },
    {
        app: 'FENCE',
        device: 'System',
        cmd: 'Measure Period',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 5 },
            { mode: 'Response', length: 5 },
        ],
        description: [
            {
                parameter: 'Active',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'GPS',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'ACL',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'UNUSED',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 2 }],
            },
            {
                parameter: 'BAT',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'DIS',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Reserve',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 9 }],
            },
            {
                parameter: 'Measure Period',
                access: ['Write', 'Response'],
                format: '%s: %u',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 2 },
                ],
            },
        ],
    },
    {
        app: 'FENCE',
        device: 'System',
        cmd: 'Alarm Threshold',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 4 },
            { mode: 'Response', length: 4 },
        ],
        description: [
            {
                parameter: 'Battery Low Threshold (%)',
                access: ['Write', 'Response'],
                format: '%.1f',
                attribute: [
                    { type: 'U', size: 1, formular: 'a/2', range: [0, 200] },
                ],
            },
            {
                parameter: 'Supply 12V Low Threshold (V)',
                access: ['Write', 'Response'],
                format: '%.1f',
                attribute: [
                    { type: 'U', size: 1, formular: 'a/2', range: [0, 24] },
                ],
            },
            {
                parameter: 'High Voltage Stable Threshold (%)',
                access: ['Write', 'Response'],
                format: '%.1f',
                attribute: [
                    { type: 'U', size: 1, formular: 'a/2', range: [0, 200] },
                ],
            },
            {
                parameter: 'High Voltage Low Value Threshold (kV)',
                access: ['Write', 'Response'],
                format: '%.1f',
                attribute: [
                    { type: 'U', size: 1, formular: 'a/2', range: [0, 255] },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Relay Control',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
            { mode: 'Message', length: 1 },
        ],
        description: [
            {
                parameter: 'Power',
                access: ['Write', 'Response', 'Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1, enum: 'onoff' }],
            },
            {
                parameter: 'Relay',
                access: ['Write', 'Response', 'Message'],
                attribute: [{ type: 'b', size: 1, enum: 'onoff' }],
            },
            {
                parameter: 'reserved',
                access: ['Write', 'Response', 'Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 6 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Force Measure',
        infor: [{ mode: 'Request', length: 0 }],
        description: [],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Reset Module',
        infor: [{ mode: 'Request', length: 1 }],
        description: [
            {
                parameter: 'Module name',
                access: ['Request'],
                attribute: [{ type: 'U', size: 1, enum: 'device' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Update_FW',
        infor: [
            { mode: 'Request', length: 4 },
            { mode: 'Message', length: 1 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'Status',
                access: ['Message'],
                attribute: [{ type: 'U', size: 1, enum: 'status' }],
            },
            {
                parameter: 'Length',
                access: ['Request'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Link',
                access: ['Request'],
                attribute: [{ type: 'C', size: 1 }],
            },
            {
                parameter: 'Firmware VER',
                access: ['Request'],
                format: '%u.%u.%u',
                attribute: [
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                ],
            },
            {
                parameter: 'Reserve',
                access: ['Request'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 4 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Information',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Get Information',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1, enum: 'yesno' }],
            },
            {
                parameter: 'Reserve',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 7 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'System',
        cmd: 'Information',
        infor: [
            { mode: 'Message', length: 3 },
            { mode: 'Response', length: 3 },
        ],
        description: [
            {
                parameter: 'Firmware VER',
                access: ['Message', 'Response'],
                format: '%u.%u.%u',
                attribute: [
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                ],
            },
            {
                parameter: 'Hardware VER',
                access: ['Message', 'Response'],
                format: '%u.%u.%u',
                attribute: [
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                    { type: 'b', size: 4 },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'GPS',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 5 },
            { mode: 'Response', length: 5 },
        ],
        description: [
            {
                parameter: 'Timeout Connecting (s)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 12 }],
            },
            {
                parameter: 'Number Sampling',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 4 }],
            },
            {
                parameter: 'Retry Mesurement',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 4 }],
            },
            {
                parameter: 'Filter Type',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 4, enum: 'filter' }],
            },
            {
                parameter: 'Timeout measurement (s)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 12 }],
            },
            {
                parameter: 'Number Satelite',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 4 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'GPS',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 8 }],
        description: [
            {
                parameter: 'Longitude',
                access: ['Message'],
                format: '%.06lf',
                attribute: [
                    {
                        type: 'S',
                        size: 4,
                        formular: 'a/1000000',
                        range: [-180, 180],
                        error: 'Invalid',
                    },
                ],
            },
            {
                parameter: 'Latitude',
                access: ['Message'],
                format: '%.06lf',
                attribute: [
                    {
                        type: 'S',
                        size: 4,
                        formular: 'a/1000000',
                        range: [-90, 90],
                        error: 'Invalid',
                    },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Accelerometer',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Sensibility',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, range: [1, 127] }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Accelerometer',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'reserved',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 2 }],
            },
            {
                parameter: 'Movement',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 5 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Accelerometer',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 6 }],
        description: [
            {
                parameter: 'reserved',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 2 }],
            },
            {
                parameter: 'Movement Current',
                access: ['Message'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserved',
                access: ['Message'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 5 }],
            },
            {
                parameter: 'Movement Statistic',
                access: ['Message'],
                format: '[%d,%d,%d,%d,%d,%d,%d,%d]',
                attribute: [
                    { type: 'b', size: 1 },
                    { type: 'b', size: 1 },
                    { type: 'b', size: 1 },
                    { type: 'b', size: 1 },
                    { type: 'b', size: 1 },
                    { type: 'b', size: 1 },
                    { type: 'b', size: 1 },
                    { type: 'b', size: 1 },
                ],
            },
            {
                parameter: 'Movement Statistic Time',
                access: ['Message'],
                attribute: [
                    {
                        type: 'U',
                        size: 4,
                        option: ['timestamp'],
                        range: [1, 4294967295],
                        error: 'Time not yet updated by GPS',
                    },
                ],
            },
        ],
    },
    {
        app: 'TILT-METER',
        device: 'Accelerometer',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 7 }],
        description: [
            {
                parameter: 'Angle',
                access: ['Message'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'axis X',
                access: ['Message'],
                attribute: [{ type: 'S', size: 2 }],
            },
            {
                parameter: 'axis Y',
                access: ['Message'],
                attribute: [{ type: 'S', size: 2 }],
            },
            {
                parameter: 'axis Z',
                access: ['Message'],
                attribute: [{ type: 'S', size: 2 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LoRaWan',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 39 },
            { mode: 'Response', length: 39 },
        ],
        description: [
            {
                parameter: 'Select DevEUIFactory',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 4, enum: 'DevEUI Type' }],
            },
            {
                parameter: 'Select DevEUILoRaWan',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 4, enum: 'DevEUI Type' }],
            },
            {
                parameter: 'DevEUI',
                access: ['Write', 'Response'],
                attribute: [{ type: 'H', size: 16 }],
            },
            {
                parameter: 'APPEUI',
                access: ['Write', 'Response'],
                attribute: [{ type: 'H', size: 16 }],
            },
            {
                parameter: 'Enable Adaptive Data Rate',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Enable Duty Cycle',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserve',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 6 }],
            },
            {
                parameter: 'Antenna Gain',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'F', size: 1 }],
            },
            {
                parameter: 'Timeout connection',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'ActiveDual_U8',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'DefaultNetwork_U8',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 2, enum: 'network' }],
            },
            {
                parameter: 'ActiveAppnonce_U8',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'Rev',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 4 }],
            },
            {
                parameter: 'LinkCheckMax_U8',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'LinkCheckDualMax_U8',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Device address',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'U', size: 4 }],
            },
            {
                parameter: 'NetID_B24',
                access: ['Write', 'Response'],
                option: ['ignore'],
                format: '0x%06X',
                attribute: [{ type: 'b', size: 24 }],
            },
            {
                parameter: 'AppNonce_B24',
                access: ['Write', 'Response'],
                option: ['ignore'],
                format: '0x%06X',
                attribute: [{ type: 'b', size: 24 }],
            },
            {
                parameter: 'DevNonce_B16',
                access: ['Write', 'Response'],
                option: ['ignore'],
                format: '0x%04X',
                attribute: [{ type: 'b', size: 16 }],
            },
        ],
    },
    {
        app: 'GEO',
        device: 'LoRaWan',
        cmd: 'Dual Config',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 2 },
            { mode: 'Response', length: 2 },
        ],
        description: [
            {
                parameter: 'Active/Deactive',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1 }],
            },
            {
                parameter: 'reserve',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 7 }],
            },
            {
                parameter: 'LinkCheckMax',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 4 }],
            },
            {
                parameter: 'LinkCheckDualMax',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 4 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LoRaWan',
        cmd: 'Change DevEUI',
        infor: [{ mode: 'Message', length: 0 }],
        description: [],
    },
    {
        app: 'GENERAL',
        device: 'Battery',
        cmd: 'Battery Debug',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 15 },
            { mode: 'Response', length: 15 },
        ],
        description: [
            {
                parameter: 'WorkingDays',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'InDayConsume',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 4 }],
            },
            {
                parameter: 'LatestDayConsume',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 4 }],
            },
            {
                parameter: 'Remain',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 4 }],
            },
            {
                parameter: 'PowerUpCounter',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'LYRECO',
        device: 'Battery',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 11 },
            { mode: 'Response', length: 11 },
        ],
        description: [
            {
                parameter: 'Coefficient_Mcu_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_Battery_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF12_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF11_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF10_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF9_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF8_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF7_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraRx_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_Sleep_uA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_Distance_uA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'TILT-METER',
        device: 'Battery',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 11 },
            { mode: 'Response', length: 11 },
        ],
        description: [
            {
                parameter: 'Coefficient_Mcu_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_Battery_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_Acl_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF12_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF11_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF10_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF9_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF8_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraTxSF7_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_LoraRx_mA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Coefficient_Sleep_uA',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Battery',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 6 }],
        description: [
            {
                parameter: 'Battery Voltage (V)',
                access: ['Message'],
                format: '%.03f',
                attribute: [{ type: 'U', size: 2, formular: 'a/1000' }],
            },
            {
                parameter: 'Battery Day Remain',
                access: ['Message'],
                attribute: [
                    {
                        type: 'U',
                        size: 2,
                        range: [0, 65534],
                        error: 'Updated On Next Day',
                    },
                ],
            },
            {
                parameter: 'Battery Percent',
                access: ['Message'],
                format: '%.02f',
                attribute: [{ type: 'U', size: 2, formular: 'a/100' }],
            },
        ],
    },
    {
        app: 'FENCE',
        device: 'Battery',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 12 }],
        description: [
            {
                parameter: 'Battery Voltage (V)',
                access: ['Message'],
                format: '%.03f',
                attribute: [{ type: 'U', size: 2, formular: 'a/1000' }],
            },
            {
                parameter: 'Battery Day Remain',
                access: ['Message'],
                attribute: [
                    {
                        type: 'U',
                        size: 2,
                        range: [0, 65534],
                        error: 'Updated On Next Day',
                    },
                ],
            },
            {
                parameter: 'Battery Percent',
                access: ['Message'],
                format: '%.02f',
                attribute: [{ type: 'U', size: 2, formular: 'a/100' }],
            },
            {
                parameter: 'Voltage Accumulator',
                access: ['Message'],
                format: '%.03f',
                attribute: [{ type: 'U', size: 2, formular: 'a/1000' }],
            },
            {
                parameter: 'High-Voltage (+kV)',
                access: ['Message'],
                format: '%.03f',
                attribute: [{ type: 'U', size: 2, formular: 'a/1000' }],
            },
            {
                parameter: 'High-Voltage (-kV)',
                access: ['Message'],
                format: '%.03f',
                attribute: [{ type: 'U', size: 2, formular: 'a/1000' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Battery',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 2 }],
        description: [
            {
                parameter: 'Battery Voltage (V)',
                access: ['Message'],
                format: '%.03f',
                attribute: [{ type: 'U', size: 2, formular: 'a/1000' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Distance',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 2 },
            { mode: 'Response', length: 2 },
        ],
        description: [
            {
                parameter: 'Mode mesure',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'distance mode' }],
            },
            {
                parameter: 'Number measure',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Distance',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 2 }],
        option: ['array'],
        description: [
            {
                parameter: 'Distance (mm)',
                access: ['Message'],
                format: '%d',
                attribute: [{ type: 'U', size: 2 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'BLE',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 15 },
            { mode: 'Response', length: 15 },
        ],
        description: [
            {
                parameter: 'Avertising Timeout (s)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Avertising Interval (ms)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Discovery Timeout (s)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Avertising Device Name',
                access: ['Write', 'Response'],
                format: '%c%c%c%c%c%c%c%c%c%c',
                attribute: [
                    { type: 'U', size: 1 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 1 },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'BLE',
        cmd: 'Disable',
        infor: [{ mode: 'Request', length: 0 }],
        description: [],
    },
    {
        app: 'GSO-BEA',
        device: 'BLE',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 7 }],
        option: ['array'],
        description: [
            {
                parameter: 'Report Data',
                access: ['Message'],
                format: '{"Address": "%s", "Adv Data": "Ignored", "RSSI": %ld}',
                attribute: [
                    { type: 'H', size: 12 },
                    { type: 'S', size: 1 },
                ],
            },
        ],
    },
    {
        app: 'GSO-BEA',
        device: 'BLE',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 15 }],
        option: ['array'],
        description: [
            {
                parameter: 'Report Data',
                access: ['Message'],
                format: '{"Address": "%s", "RSSI": %ld, "Adv Length": %d, "Adv Data": {"Battery": %d, "In Region": %d, "EnterCnt": %d}}',
                attribute: [
                    { type: 'H', size: 12 },
                    { type: 'S', size: 1 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 2 },
                    { type: 'U', size: 1 },
                    { type: 'U', size: 4 },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'BLE',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'Num of BLE Device',
                access: ['Message'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'BLE',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Request Scan',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1, enum: 'yesno' }],
            },
            {
                parameter: 'Reserve',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 7 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Temperature',
        cmd: 'Data',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Response', length: 2 },
        ],
        description: [
            {
                parameter: 'Temperature MCU(°C)',
                access: ['Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Temperature',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 2 }],
        description: [
            {
                parameter: 'Temperature (°C)',
                access: ['Message'],
                attribute: [{ type: 'U', size: 2 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Direct Data',
        infor: [
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'AT CMD',
                access: ['Write', 'Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Test Mode',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Test Mode',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'onoff' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Mqtt Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 3 },
            { mode: 'Response', length: 3 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'Mqtt Server',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'mqtt server' }],
            },
            {
                parameter: 'Username',
                access: ['Write', 'Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
            {
                parameter: 'Password',
                access: ['Write', 'Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'Subscribed Topic ',
                access: ['Message'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Reset',
        infor: [{ mode: 'Request', length: 1 }],
        description: [
            {
                parameter: 'Delay Time(min)',
                access: ['Request', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Change Connect',
        infor: [{ mode: 'Message', length: 2 }],
        option: ['text'],
        description: [
            {
                parameter: 'Mqtt Server',
                access: ['Message'],
                attribute: [{ type: 'U', size: 1, enum: 'mqtt server' }],
            },
            {
                parameter: 'Username',
                access: ['Message'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Operator Status',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Response', length: 2 },
            { mode: 'Message', length: 2 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'Name Format',
                access: ['Response', 'Message'],
                attribute: [{ type: 'U', size: 1, enum: 'lteop name format' }],
            },
            {
                parameter: 'Operator Name',
                access: ['Response', 'Message'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Mqtt KeepAlive Interval',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 2 },
            { mode: 'Response', length: 2 },
        ],
        description: [
            {
                parameter: 'Keep Alive Interval (s)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'SSL Key URL',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'Link',
                access: ['Write', 'Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Mqtt SSL',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 2 },
            { mode: 'Response', length: 2 },
        ],
        description: [
            {
                parameter: 'Profile Id',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Enable',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'SSL Key URL',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 3 },
            { mode: 'Response', length: 3 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'Profile Id',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Lenght',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 4 }],
            },
            {
                parameter: 'Key Name',
                access: ['Write', 'Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
            {
                parameter: 'Link',
                access: ['Write', 'Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Set Endpoint',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 2 },
            { mode: 'Response', length: 2 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'Profile Id',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Enpoint',
                access: ['Write', 'Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Active Profile',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Profile Id',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Read Profile',
        infor: [
            { mode: 'Read', length: 1 },
            { mode: 'Response', length: 4 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'Profile ID',
                access: ['Read', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Endpoint',
                access: ['Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
            {
                parameter: 'SSL Enable',
                access: ['Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Key Name',
                access: ['Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'Read All Profiles',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Response', length: 2 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'Profile ID',
                access: ['Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Endpoint',
                access: ['Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
            {
                parameter: 'SSL Enable',
                access: ['Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Key Name',
                access: ['Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'LTE Module Version',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Response', length: 1 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'Version',
                access: ['Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'DFOTA',
        infor: [
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        option: ['text'],
        description: [
            {
                parameter: 'url',
                access: ['Write', 'Response'],
                attribute: [{ type: 'C', size: 1 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'LTE',
        cmd: 'DFOTA Result',
        infor: [{ mode: 'Message', length: 4 }],
        option: ['text'],
        description: [
            {
                parameter: 'Error code',
                access: ['Message'],
                attribute: [{ type: 'U', size: 4 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Schedule',
        cmd: 'Delete Activity',
        infor: [{ mode: 'Request', length: 0 }],
        description: [],
    },
    {
        app: 'GENERAL',
        device: 'Schedule',
        cmd: 'Setting',
        infor: [{ mode: 'Response', length: 1 }],
        description: [
            {
                parameter: 'Reading Status',
                access: ['Response'],
                attribute: [{ type: 'U', size: 1, enum: 'array status' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Schedule',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 6 },
            { mode: 'Response', length: 6 },
        ],
        option: ['array'],
        description: [
            {
                parameter: 'Schedules',
                access: ['Write', 'Response'],
                format: '{"Type": "%s", "%s": "%02d:%02d:%02d", "Action": "%s"}',
                attribute: [
                    { type: 'U', size: 1, enum: 'frequency' },
                    { type: 'U', size: 1, enum: 'day of week' },
                    { type: 'U', size: 1, range: [0, 23] },
                    { type: 'U', size: 1, range: [0, 59] },
                    { type: 'U', size: 1, range: [0, 59] },
                    { type: 'U', size: 1, enum: 'action' },
                ],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'MagSensor',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Send Door Status',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1, enum: 'onoff' }],
            },
            {
                parameter: 'Alert Door Status',
                access: ['Write', 'Response'],
                attribute: [{ type: 'b', size: 1, enum: 'onoff' }],
            },
            {
                parameter: 'Reserve',
                access: ['Write', 'Response'],
                option: ['ignore'],
                attribute: [{ type: 'b', size: 6 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'MagSensor',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 1 }],
        description: [
            {
                parameter: 'Door Status',
                access: ['Message'],
                attribute: [{ type: 'U', size: 1, enum: 'openclose' }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'FlowSensor',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 16 },
            { mode: 'Response', length: 16 },
        ],
        description: [
            {
                parameter: 'Calculation Period 1 (minute)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Alarm Threshold 1 (pulse/hour)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Leak Threshold 1 (pulse/hour)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Daily Number Under Leak Threshold 1',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Calculation Period 2 (minute)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Alarm Threshold 2 (pulse/hour)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Leak Threshold 2 (pulse/hour)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Daily Number Under Leak Threshold 2',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'FlowSensor',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 16 }],
        description: [
            {
                parameter: 'Pulse 1',
                access: ['Message'],
                attribute: [{ type: 'b', size: 40 }],
            },
            {
                parameter: 'Flow Rate 1 (pulse/hour)',
                access: ['Message'],
                attribute: [{ type: 'b', size: 24 }],
            },
            {
                parameter: 'Pulse 2',
                access: ['Message'],
                attribute: [{ type: 'b', size: 40 }],
            },
            {
                parameter: 'Flow Rate 2 (pulse/hour)',
                access: ['Message'],
                attribute: [{ type: 'b', size: 24 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'BLE-Mesh',
        cmd: 'Data',
        infor: [{ mode: 'Message', length: 6 }],
        description: [
            {
                parameter: 'Peer Address',
                access: ['Message'],
                format: '0x%04X',
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'IMEI',
                access: ['Message'],
                format: '0x%08X',
                attribute: [{ type: 'U', size: 4 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Serial',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 2 },
            { mode: 'Response', length: 2 },
        ],
        description: [
            {
                parameter: 'Timeout Connection (s)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
        ],
    },
    {
        app: 'GENERAL',
        device: 'Button',
        cmd: 'Setting',
        infor: [
            { mode: 'Read', length: 1 },
            { mode: 'Write', length: 7 },
            { mode: 'Response', length: 7 },
        ],
        description: [
            {
                parameter: 'Button ID',
                access: ['Read', 'Write', 'Response'],
                attribute: [{ type: 'U', size: 1 }],
            },
            {
                parameter: 'Duration of Click action (ms)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Duration of Press action (ms)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
            {
                parameter: 'Duration of Time out after last action (ms)',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 2 }],
            },
        ],
    },
    {
        app: 'DQS',
        device: 'Light',
        cmd: 'Dimmer',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Percent',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, range: [0, 100] }],
            },
        ],
    },
    {
        app: 'DQS',
        device: 'Light',
        cmd: 'Turning',
        infor: [
            { mode: 'Read', length: 0 },
            { mode: 'Write', length: 1 },
            { mode: 'Response', length: 1 },
        ],
        description: [
            {
                parameter: 'Turn',
                access: ['Write', 'Response'],
                attribute: [{ type: 'U', size: 1, enum: 'onoff' }],
            },
        ],
    },
];

const init = {
    dictionary: [].concat(Dictionary),
    format: [].concat(Format),
    encode: [
        {
            label: 'App',
            value: '',
            data: Dictionary?.find((value) => value.type == 'app')?.description,
        },
    ],
    editIndex: null,
    frameJSON: {
        app: '',
        messageType: '',
        arrayPackage: [],
    },
    packageJSON: {
        device: '',
        command: '',
        mode: '',
        length: 0,
        format: {},
    },
};

const actions = {
    getDataApp(state) {
        state.dictionary = Dictionary;
        state.format = Format;
        state.encode.push({
            label: 'App',
            value: '',
            data: state.dictionary?.find((value) => value.type == 'app')
                ?.description,
        });
    },

    toggle(state, value) {
        if (value[0]) {
            switch (value[1]) {
                case 0: {
                    state.frameJSON.app = value[0];
                    state.encode[value[1]].value = value[0];
                    state.encode.length = 1;
                    const arr = [
                        {
                            label: 'Frame Type',
                            value: '',
                            data: state.dictionary?.find(
                                (value) => value.type == 'frametype'
                            )?.description,
                        },
                        [
                            {
                                label: 'Device',
                                value: '',
                                data: state.dictionary?.find(
                                    (value) => value.type == 'device'
                                )?.description,
                            },
                        ],
                    ];
                    state.encode.push(...arr);
                    break;
                }
                case 1:
                    state.encode[value[1]].value = value[0];
                    state.frameJSON.messageType = value[0];
                    break;
                default:
                    this.togglePackage(state, value);
                    break;
            }
        } else {
            encode.length = 1;
        }
    },

    togglePackage(state, value) {
        if (value[2] < 3) {
            state.encode[value[1]][value[2]].value = value[0];

            state.frameJSON.arrayPackage[value[1] - 2] = state.packageJSON;
        }

        switch (value[2]) {
            case 0: {
                state.packageJSON.device = value[0];
                state.packageJSON.command = '';
                state.packageJSON.mode = '';
                state.packageJSON.length = 0;

                state.encode[value[1]].length = 1;
                console.log(value);
                console.log(
                    state.dictionary.find((data) => data.type == value[0])
                );
                const arrCommand = [
                    {
                        label: 'Command',
                        value: '',
                        data: state.dictionary?.find(
                            (data) => data.type == (value[0] || 'cmd')
                        )?.description,
                    },
                ];

                console.log(arrCommand);

                state.encode[value[1]].push(...arrCommand);
                break;
            }
            case 1: {
                state.packageJSON.command = value[0];
                state.packageJSON.mode = '';
                state.packageJSON.length = 0;

                delete state.packageJSON.format;
                state.packageJSON.format = {};

                state.encode[value[1]].length = 2;
                const objectFound = this.findFormat(
                    state.encode[0].value,
                    state.encode[value[1]][value[2] - 1].value,
                    value[0]
                );

                console.log(objectFound);

                objectFound.infor = objectFound.infor.filter(
                    (elm) => !['Response', 'Message', 'ACK'].includes(elm.mode)
                );

                Object.assign(state.packageJSON.format, objectFound);

                const objMode = {
                    label: 'Mode',
                    value: '',
                    data: objectFound.infor.map((mode) => {
                        return {
                            name: mode.mode,
                            value: mode.length,
                        };
                    }),
                };
                console.log(objMode);

                state.encode[value[1]].push(objMode);
                break;
            }
            case 2: {
                const dataMode = value[0].split(',');
                state.encode[value[1]].length = 3;
                state.packageJSON.mode = dataMode[0];
                state.packageJSON.length = parseInt(dataMode[1]);

                const arrPayload = state.packageJSON.format.description.filter(
                    (value) => value.access.includes(dataMode[0])
                );

                const arrDataRender = this.handleArrPayload(arrPayload);

                if (
                    state.packageJSON.format.option &&
                    state.packageJSON.format.option[0] == 'array'
                ) {
                    state.arrDataPayload = JSON.stringify([...arrDataRender]);
                    state.tempLength = state.packageJSON.length;
                }

                state.encode[value[1]].push(...arrDataRender);

                break;
            }
            default:
                this.togglePayload(state, value);
                break;
        }
    },

    togglePayload(state, value) {
        state.encode[value[1]][value[2]][value[3]].value = value[0];

        const type =
            state.packageJSON.format.description[value[2] - 3].attribute[
                value[3]
            ].type;
        const size =
            state.packageJSON.format.description[value[2] - 3].attribute[
                value[3]
            ].size;

        const isEnum =
            state.packageJSON.format.description[value[2] - 3].attribute[
                value[3]
            ].enum;

        let output = '';
        let data = '';
        let length = this.findID('type', type) * size;
        let sign = '0';

        if (isEnum) {
            const arrEnum = Dictionary?.find(
                (value) => value.type == isEnum
            )?.description;
            value[0] = arrEnum.find((elm) => elm.name === value[0]).id;
        }

        switch (type) {
            case 'U':
            case 'b':
                data = parseInt(value[0], 10).toString(2);
                break;
            case 'S':
                if (value[0] < 0) {
                    data = (value[0] >>> 0).toString(2);
                    sign = '1';
                } else {
                    data = parseInt(value[0], 10).toString(2);
                }
                break;
            case 'F':
                data = this.floatAsBinaryString(value[0], 4);
                break;
            case 'H':
                this.reverseHex(value[0]).forEach((str) => {
                    data += parseInt(str, 16).toString(2).padStart(8, '0');
                });
                break;
            case 'C':
                this.asciiToHex(value[0])
                    .match(/[a-fA-F0-9]{2}/g)
                    .reverse()
                    .forEach((str) => {
                        data += parseInt(str, 16).toString(2).padStart(8, '0');
                    });

                length = data.length;

                break;
            default:
                break;
        }

        output = this.handlePadding(data, length, sign)
            .split('')
            .reverse()
            .join('');

        state.packageJSON.format.description[value[2] - 3].attribute[
            value[3]
        ].value = output;
    },

    addDescription({ arrDataPayload, encode, packageJSON, tempLength }, value) {
        if (arrDataPayload?.length) {
            const dataDescription = JSON.parse(
                JSON.stringify({ ...packageJSON.format.description[0] })
            );
            packageJSON.format.description.push(dataDescription);
            packageJSON.length += tempLength;
            encode[value[0]].push(...JSON.parse(arrDataPayload));
        }
    },

    deleteDescription({ encode, packageJSON }, value) {
        if (encode[value[0]]?.length > 4) {
            const startIndexEncode = encode[value[0]].length - 1;
            const startIndexPackage = packageJSON.format.description.length - 1;
            encode[value[0]].splice(startIndexEncode, 1);
            packageJSON.format.description.splice(startIndexPackage, 1);
        }
    },

    handleArrPayload(arr) {
        return arr.map((value) => {
            let temp = '';
            temp = value.attribute.map((att) => {
                let obj = {};
                if (att.enum) {
                    const dictionary = Dictionary?.find(
                        (value) => value.type == att.enum
                    )?.description;
                    obj = {
                        label: value.parameter,
                        value: '',
                        size: att.size,
                        data: [...dictionary],
                    };
                } else {
                    obj = {
                        label: value.parameter,
                        value: '',
                        size: att.size,
                        data: null,
                        type: att.type,
                        range: att.range,
                        power: this.findID('type', att.type) * att.size,
                    };
                }
                return obj;
            });
            return temp;
        });
    },

    findAppType(appName, deviceName, commandName) {
        var output = this.findFormat(appName, deviceName, commandName);
        console.log(output);
        if (output.length > 1) {
            return [...new Set(output.map((value) => value.app))];
        } else if (output.length == 1) {
            return [output[0].app];
        } else {
            return [];
        }
    },

    findFormat(appName, deviceName, commandName) {
        var output = {};
        for (let index = Format.length - 1; index >= 0; index--) {
            var result = true;

            var sApp = Format[index].app;
            var sDevice = Format[index].device;
            var sCmd = Format[index].cmd;

            result =
                result &&
                (!sApp.localeCompare(appName) ||
                    !sApp.localeCompare('GENERAL'));

            result =
                result &&
                (!sDevice.localeCompare(deviceName) ||
                    !sDevice.localeCompare('ALL'));

            result = result && !sCmd.localeCompare(commandName);

            if (!result) continue;

            Object.assign(output, Format[index]);

            break;
        }
        return output;
    },

    findID(type, name) {
        let output;

        const arrayData = Dictionary?.find(
            (elm) => elm.type == type
        )?.description;

        if (arrayData?.length) {
            for (const item of arrayData) {
                if (!name.localeCompare(item.name)) {
                    output = item.id;
                    break;
                }
            }
        }

        return output;
    },

    createFrame(state) {
        let packageFrame = '';
        let str = '';
        const appID = this.findID('app', state.frameJSON.app);
        const typeID = this.findID('frametype', state.frameJSON.messageType);

        let frame = this.decimalToHex(appID, 2) + this.decimalToHex(typeID, 2);

        for (const item of state.frameJSON.arrayPackage) {
            console.log(item);
            let subPackage = '';

            const idMode = this.findID('mode', item.mode);

            const listDeviceCommand = state.dictionary.find(
                (value) => value.type == item.device
            )?.description;

            let idCommand = 0;

            for (const elmCommand of listDeviceCommand) {
                if (elmCommand.name == item.command) {
                    idCommand = elmCommand.id;
                }
            }

            const subInfo = idCommand + idMode * Math.pow(2, 6);

            if (item.length) {
                for (const elm of item.format.description) {
                    for (const atr of elm.attribute) {
                        str += atr.value;

                        if (atr.type === 'C') {
                            item.length += atr.value.length / 8 - 1;
                        }
                    }
                }

                for (let index = 0; index < str.length; index += 8) {
                    let byteData = str
                        .slice(index, index + 8)
                        .split('')
                        .reverse()
                        .join('');
                    subPackage += this.decimalToHex(parseInt(byteData, 2), 2);
                }
            }

            let lengthSubPackage = subPackage.length / 2;

            if (lengthSubPackage !== item.length) {
                throw Error('Anh Dũng kêu lỗi');
            } else {
                const idDevice = this.findID('device', item.device);
                packageFrame +=
                    this.decimalToHex(idDevice, 2) +
                    this.decimalToHex(subInfo, 2) +
                    this.decimalToHex(lengthSubPackage, 2) +
                    subPackage;
            }
        }

        frame += this.decimalToHex(packageFrame.length / 2, 2) + packageFrame;

        alert(frame);
    },

    decimalToHex(dec, padding) {
        let hex = Number(dec).toString(16);
        while (hex.length < padding) {
            hex = '0' + hex;
        }
        return hex.toUpperCase();
    },

    reverseHex(hex_string) {
        const result = hex_string.match(/[a-fA-F0-9]{2}/g).reverse();
        console.log(result);
        return result;
    },

    floatAsBinaryString(floatNumber, byteLength) {
        let numberAsBinaryString = '';
        const singlePrecisionBytesLength = 4;
        const bitsInByte = 8;

        const arrayBuffer = new ArrayBuffer(byteLength);
        const dataView = new DataView(arrayBuffer);

        const byteOffset = 0;
        const littleEndian = false;

        if (byteLength === singlePrecisionBytesLength) {
            dataView.setFloat32(byteOffset, floatNumber, littleEndian);
        } else {
            dataView.setFloat64(byteOffset, floatNumber, littleEndian);
        }

        for (let byteIndex = 0; byteIndex < byteLength; byteIndex += 1) {
            let bits = dataView.getUint8(byteIndex).toString(2);
            if (bits.length < bitsInByte) {
                bits =
                    new Array(bitsInByte - bits.length).fill('0').join('') +
                    bits;
            }
            numberAsBinaryString += bits;
        }

        return numberAsBinaryString;
    },

    asciiToHex(str) {
        let hexString = '';
        for (let i = 0; i < str.length; i++) {
            const asciiValue = str.charCodeAt(i).toString(16);

            hexString += asciiValue.length < 2 ? '0' + asciiValue : asciiValue;
        }
        hexString += '00';

        return hexString;
    },

    handlePadding(params, length, sign) {
        let output = params + '';

        if (output.length < Number(length)) {
            while (output.length < Number(length)) {
                output = sign + output;
            }
        } else if (output.length > Number(length)) {
            output = output.slice(output.length - length);
        }

        return output;
    },
};

// Use the init as a default value
export default function reducer(state = init, action, args) {
    // if (!init.dictionary.length) {
    //     actions.getDataApp(state);
    // }
    actions[action] && actions[action](state, args);
    return state;
}
