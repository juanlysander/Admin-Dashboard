import { ResponsiveBar } from '@nivo/bar'
import { colors, useTheme } from '@mui/material'
import { tokens } from '../theme'
import { mockBarData as data} from "../data/mockData"


const BarChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const color = tokens(theme.palette.mode)

    return (
        <ResponsiveBar
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: color.grey[500]
                    },
                },
                legend: {
                    text: {
                        fill: colors.grey[500]
                    },
                },
                ticks: {
                    line: {
                        stroke: colors.grey[500],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.grey[500]
                    },
                },
            },
            legends: {
                text: {
                    fill: colors.grey[500]
                },
            },
        }}
        keys={[
            'Duplek',
            'Ivory',
            'Kraft',
            'HVS',
        ]}
        indexBy="produk"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'Produk',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'Jumlah Bahan',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        enableGridX={true}
        labelSkipWidth={11}
        labelSkipHeight={7}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
        />
    ) 
}

export default BarChart