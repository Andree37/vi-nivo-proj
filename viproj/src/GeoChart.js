// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo'

class GeoChart  extends React.Component{

  render(){
    const data =[
      {
        "id": "AFG",
        "value": 940751
      },
      {
        "id": "AGO",
        "value": 951779
      },
      {
        "id": "ALB",
        "value": 543501
      },
      {
        "id": "ARE",
        "value": 382326
      },
      {
        "id": "ARG",
        "value": 391978
      },
      {
        "id": "ARM",
        "value": 160325
      },
      {
        "id": "ATA",
        "value": 733246
      },
      {
        "id": "ATF",
        "value": 807220
      },
      {
        "id": "AUT",
        "value": 144344
      },
      {
        "id": "AZE",
        "value": 244843
      },
      {
        "id": "BDI",
        "value": 574367
      },
      {
        "id": "BEL",
        "value": 763607
      },
      {
        "id": "BEN",
        "value": 442596
      },
      {
        "id": "BFA",
        "value": 263951
      },
      {
        "id": "BGD",
        "value": 360075
      },
      {
        "id": "BGR",
        "value": 346282
      },
      {
        "id": "BHS",
        "value": 425454
      },
      {
        "id": "BIH",
        "value": 826747
      },
      {
        "id": "BLR",
        "value": 450893
      },
      {
        "id": "BLZ",
        "value": 97175
      },
      {
        "id": "BOL",
        "value": 438258
      },
      {
        "id": "BRN",
        "value": 536148
      },
      {
        "id": "BTN",
        "value": 842309
      },
      {
        "id": "BWA",
        "value": 61312
      },
      {
        "id": "CAF",
        "value": 674229
      },
      {
        "id": "CAN",
        "value": 77407
      },
      {
        "id": "CHE",
        "value": 947769
      },
      {
        "id": "CHL",
        "value": 679101
      },
      {
        "id": "CHN",
        "value": 637282
      },
      {
        "id": "CIV",
        "value": 610964
      },
      {
        "id": "CMR",
        "value": 126591
      },
      {
        "id": "COG",
        "value": 636134
      },
      {
        "id": "COL",
        "value": 424859
      },
      {
        "id": "CRI",
        "value": 257758
      },
      {
        "id": "CUB",
        "value": 925467
      },
      {
        "id": "-99",
        "value": 805250
      },
      {
        "id": "CYP",
        "value": 275065
      },
      {
        "id": "CZE",
        "value": 455512
      },
      {
        "id": "DEU",
        "value": 869737
      },
      {
        "id": "DJI",
        "value": 804927
      },
      {
        "id": "DNK",
        "value": 548352
      },
      {
        "id": "DOM",
        "value": 645594
      },
      {
        "id": "DZA",
        "value": 86170
      },
      {
        "id": "ECU",
        "value": 759061
      },
      {
        "id": "EGY",
        "value": 788299
      },
      {
        "id": "ERI",
        "value": 438739
      },
      {
        "id": "ESP",
        "value": 69735
      },
      {
        "id": "EST",
        "value": 211763
      },
      {
        "id": "ETH",
        "value": 757533
      },
      {
        "id": "FIN",
        "value": 658504
      },
      {
        "id": "FJI",
        "value": 257684
      },
      {
        "id": "FLK",
        "value": 168765
      },
      {
        "id": "FRA",
        "value": 517283
      },
      {
        "id": "GAB",
        "value": 115437
      },
      {
        "id": "GBR",
        "value": 305075
      },
      {
        "id": "GEO",
        "value": 703153
      },
      {
        "id": "GHA",
        "value": 934245
      },
      {
        "id": "GIN",
        "value": 765401
      },
      {
        "id": "GMB",
        "value": 432776
      },
      {
        "id": "GNB",
        "value": 445334
      },
      {
        "id": "GNQ",
        "value": 545229
      },
      {
        "id": "GRC",
        "value": 944039
      },
      {
        "id": "GTM",
        "value": 545847
      },
      {
        "id": "GUY",
        "value": 323085
      },
      {
        "id": "HND",
        "value": 993514
      },
      {
        "id": "HRV",
        "value": 555557
      },
      {
        "id": "HTI",
        "value": 709926
      },
      {
        "id": "HUN",
        "value": 33493
      },
      {
        "id": "IDN",
        "value": 829022
      },
      {
        "id": "IND",
        "value": 711502
      },
      {
        "id": "IRL",
        "value": 246101
      },
      {
        "id": "IRN",
        "value": 518098
      },
      {
        "id": "IRQ",
        "value": 537514
      },
      {
        "id": "ISL",
        "value": 936685
      },
      {
        "id": "ISR",
        "value": 207118
      },
      {
        "id": "ITA",
        "value": 659381
      },
      {
        "id": "JAM",
        "value": 587280
      },
      {
        "id": "JOR",
        "value": 314134
      },
      {
        "id": "JPN",
        "value": 460117
      },
      {
        "id": "KAZ",
        "value": 643322
      },
      {
        "id": "KEN",
        "value": 645999
      },
      {
        "id": "KGZ",
        "value": 790587
      },
      {
        "id": "KHM",
        "value": 269799
      },
      {
        "id": "OSA",
        "value": 931812
      },
      {
        "id": "KWT",
        "value": 433242
      },
      {
        "id": "LAO",
        "value": 897099
      },
      {
        "id": "LBN",
        "value": 774384
      },
      {
        "id": "LBR",
        "value": 201328
      },
      {
        "id": "LBY",
        "value": 508583
      },
      {
        "id": "LKA",
        "value": 360571
      },
      {
        "id": "LSO",
        "value": 555874
      },
      {
        "id": "LTU",
        "value": 255750
      },
      {
        "id": "LUX",
        "value": 830036
      },
      {
        "id": "LVA",
        "value": 695457
      },
      {
        "id": "MAR",
        "value": 477975
      },
      {
        "id": "MDA",
        "value": 836852
      },
      {
        "id": "MDG",
        "value": 412317
      },
      {
        "id": "MEX",
        "value": 785775
      },
      {
        "id": "MKD",
        "value": 769151
      },
      {
        "id": "MLI",
        "value": 476710
      },
      {
        "id": "MMR",
        "value": 753059
      },
      {
        "id": "MNE",
        "value": 897369
      },
      {
        "id": "MNG",
        "value": 919222
      },
      {
        "id": "MOZ",
        "value": 221635
      },
      {
        "id": "MRT",
        "value": 627958
      },
      {
        "id": "MWI",
        "value": 313409
      },
      {
        "id": "MYS",
        "value": 750393
      },
      {
        "id": "NAM",
        "value": 761947
      },
      {
        "id": "NCL",
        "value": 56707
      },
      {
        "id": "NER",
        "value": 433068
      },
      {
        "id": "NGA",
        "value": 209955
      },
      {
        "id": "NIC",
        "value": 770682
      },
      {
        "id": "NLD",
        "value": 40916
      },
      {
        "id": "NOR",
        "value": 401542
      },
      {
        "id": "NPL",
        "value": 92790
      },
      {
        "id": "NZL",
        "value": 610573
      },
      {
        "id": "OMN",
        "value": 209847
      },
      {
        "id": "PAK",
        "value": 520992
      },
      {
        "id": "PAN",
        "value": 56095
      },
      {
        "id": "PER",
        "value": 639956
      },
      {
        "id": "PHL",
        "value": 340035
      },
      {
        "id": "PNG",
        "value": 147979
      },
      {
        "id": "POL",
        "value": 421892
      },
      {
        "id": "PRI",
        "value": 740610
      },
      {
        "id": "PRT",
        "value": 29735
      },
      {
        "id": "PRY",
        "value": 765681
      },
      {
        "id": "QAT",
        "value": 362697
      },
      {
        "id": "ROU",
        "value": 690431
      },
      {
        "id": "RUS",
        "value": 873834
      },
      {
        "id": "RWA",
        "value": 623122
      },
      {
        "id": "ESH",
        "value": 521228
      },
      {
        "id": "SAU",
        "value": 960679
      },
      {
        "id": "SDN",
        "value": 658795
      },
      {
        "id": "SDS",
        "value": 725736
      },
      {
        "id": "SEN",
        "value": 950004
      },
      {
        "id": "SLB",
        "value": 188361
      },
      {
        "id": "SLE",
        "value": 434591
      },
      {
        "id": "SLV",
        "value": 667884
      },
      {
        "id": "ABV",
        "value": 158239
      },
      {
        "id": "SOM",
        "value": 185716
      },
      {
        "id": "SRB",
        "value": 181435
      },
      {
        "id": "SUR",
        "value": 827671
      },
      {
        "id": "SVK",
        "value": 676993
      }]
    return (
      <div>
        <ResponsiveChoropleth
          data={data}
          features="/* please have a look at the description for usage */"
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="nivo"
          domain={[ 0, 1000000 ]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={366}
          projectionTranslation={[ 0.15, 0.05 ]}
          projectionRotation={[ 0, 0, 0 ]}
          enableGraticule={true}
          graticuleLineColor="#dddddd"
          borderWidth={0.5}
          borderColor="#152538"
          legends={[
              {
                  anchor: 'bottom-left',
                  direction: 'column',
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: 'left-to-right',
                  itemTextColor: '#444444',
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemTextColor: '#000000',
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
      />

      </div>
    )
  }
}

export default GeoChart;