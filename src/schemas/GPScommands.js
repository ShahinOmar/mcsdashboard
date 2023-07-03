
const commands=[
    {
        mnemonic: 'F1',
        description: 'Time Zone Offset',
        subMenmonics: [
            {
                mnemonic: 'F2',
                description: '12/24 Hour Format',
            },
        
            {
                mnemonic: 'F3',
                description: 'Time & Date',
            },        
            {
                mnemonic: 'F5',
                description: 'Time-Quality Setup',
            },
            {
                mnemonic: 'F8',
                description: 'Continuous Time Once-per-Second',
            },
            {
                mnemonic: 'F9',
                description: 'Time On Request',
            },
            {
                mnemonic: 'F11',
                description: 'Time Output Format',
            },
            {
                mnemonic: 'F13',
                description: 'Time Error',
            },
            {
                mnemonic: 'F66',
                description: 'Daylight Saving Time (DST) Mode',
            },
            {
                mnemonic: 'F67',
                description: 'Manual Leap Second Entry',
            },
            {
                mnemonic: 'F69',
                description: 'Time Mode',
            },
        ]
    },
    {
        mnemonic: 'F4',
        description: 'Serial Port Configuration',
        subMenmonics: []
    },
    {
        mnemonic: 'F6',
        description: 'Keypad Lock',
        subMenmonics: []
    },

    {
        mnemonic: 'F7',
        subMenmonics: []
    },

    {
        mnemonic: 'F8',
        subMenmonics: []
    },

    {
        mnemonic: 'F9',
        subMenmonics: []
    },

    {
        mnemonic: 'F11',
        subMenmonics: []
    },

    {
        mnemonic: 'F13',
        subMenmonics: []
    },

    {
        mnemonic: 'F18',
        description: 'Software Version Request',
        subMenmonics: []
    },

    {
        mnemonic: 'F27',
        description: 'FTM III Configuration',
        subMenmonics: []
    },

    {
        mnemonic: 'F42',
        description: 'Multicode Output Configuration',
        subMenmonics: []
    },

    {
        mnemonic: 'F44',
        description: 'N.8 Frequency Synthesizer',
        subMenmonics: []
    },
    {
        mnemonic: 'F53',
        description: 'GPS Operation Mode',
        subMenmonics: [
            {
                mnemonic: 'F50',
                description: 'GPS Receiver LLA/XYZ Position',
            },
            {
                mnemonic: 'F51',
                description: 'GPS Antenna Cable Delay',
            },
            {
                mnemonic: 'F60',
                description: 'GPS Receiver Satellite List ',
            },
        ]
    },
    {
        mnemonic: 'F52',
        description: 'Distribution Cable Delay',
        subMenmonics: []
    },
    {
        mnemonic: 'F66',
        subMenmonics: []
    },

    {
        mnemonic: '67',
        subMenmonics: []
    },

    {
        mnemonic: 'F69',
        subMenmonics: []
    },

    {
        mnemonic: 'F71',
        description: 'Oscillator Statistics',
        subMenmonics: []
    },

    {
        mnemonic: 'F72',
        description: 'Fault Status',
        subMenmonics: []
    },

    {
        mnemonic: 'F73',
        description: 'Alarm Control / Status',
        subMenmonics: []
    },

    {
        mnemonic: 'F74',
        description: 'Clock Source Control',
        subMenmonics: []
    },

    {
        mnemonic: 'F77',
        description: 'PTTI Output Configuration',
        subMenmonics: []
    },

    {
        mnemonic: 'F78',
        description: 'Parallel BCD Output Configuration',
        subMenmonics: []
    },

    {
        mnemonic: 'F90',
        description: 'Code Output Configuration',
        subMenmonics: []
    },

    {
        mnemonic: 'F100',
        description: 'Network Port Configuration & GPS Firmware',
        subMenmonics: [
            {
                mnemonic: 'F100 EA',
                description: 'Ethernet Address',
            },
            {
                mnemonic: 'F100 IP',
                description: 'IP Address',
            },
            {
                mnemonic: 'F100 SM',
                description: 'Subnet Mask',
            },
            {
                mnemonic: 'F100 G',
                description: 'Gateway',
            },
            {
                mnemonic: 'F100 IC',
                description: 'Network Port Settings',
            },
            {
                mnemonic: 'F100 BASET',
                description: '10/100 BASE- T',
            },
        ]
    },
    {
        mnemonic: 'F100 G',
        subMenmonics: []
    }
]

export default commands;