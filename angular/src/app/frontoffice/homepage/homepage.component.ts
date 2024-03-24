import { Component } from '@angular/core';
import * as apexcharts from 'apexcharts' ;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  ngOnInit(): void {
    var options = {
      series: [
        {
          name: 'Unpaid',
          data: [60, 60, 80, 30, 52, 58]
        }, 
        {
          name: 'Paid',
          data: [80, 70, 55, 95, 70, 15]
        }, 
      ],
      chart: {
        type: 'bar',
        height: 350, 
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 7
        },
      },
      
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      colors: ['#5ECFFF', '#38E25D'],
      legend: {
        show: false,
        position: 'top',
        fontSize: '14px',
        fontFamily: "'Open Sans' Sans-serif",
        fontWeight: 400,
        offsetY: 5,
        labels: {
            colors: '#A5A5A5',
            useSeriesColors: false
        },
        markers: {
            width: 13,
            height: 13,
            offsetX: -10,
            offsetY: 0,
        },
        itemMargin: {
          horizontal: 25,
          vertical: 0
        },
        onItemClick: {
            toggleDataSeries: true
        },
        onItemHover: {
            highlightDataSeries: true
        },
      },
      stroke: {
        show: true,
        width: 4,
        colors: ['transparent']
      },
  
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
      yaxis: {
        labels: {
          show: true,
          // rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: false,
          minHeight: undefined,
          maxHeight: 120,
          style: {
              colors: ['#A5A5A5'],
              fontSize: '14px',
              fontFamily: "'Public Sans' Sans-serif",
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
          },
        },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val:any) {
            return val + " Invoices"
          }
        }
      },
      responsive: [
        {
          breakpoint: 991,
          options: {        
            plotOptions: {
              bar: {
                horizontal: true,
                columnWidth: '100%',
                borderRadius: 5
              },
            },       
            legend: {
              position: 'bottom',
              horizontalAlign: 'center'
            }
          },
        }
      ]
    };
    var chart_fourtyfour = new ApexCharts(document.querySelector("#chart-44"), options);
    chart_fourtyfour.render();

    var options1 = {
      series: [81],
      chart: {
        width: 170,
        height: 280,
        type: 'radialBar',
      },
      colors: ['#924AEF'],
      
      plotOptions: {
        radialBar: {
          hollow: {
            size: '30%',
            margin: 5,
            background: 'transparent',
          },
          track: {
            background: "#F6EEFF",
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 5,
              fontFamily: "'Cairo' Sans-serif",
              fontSize: '20px',
              fontWeight: 700,
            }
          }
        },
      },
      
      labels: [''],
      responsive: [
        {
          breakpoint: 767,
          options: {        
            legend: {
              position: 'bottom',
              horizontalAlign: 'center'
            }
          }
        }
      ]
    };
    
    var chart_fourtyeight = new ApexCharts(document.querySelector("#chart-48"), options1);
    chart_fourtyeight.render();
    
    
    // Chart 49
    var options2 = {
      series: [22],
      chart: {
        width: 170,
        height: 280,
        type: 'radialBar',
      },
      colors: ['#E328AF'],
      
      plotOptions: {
        radialBar: {
          hollow: {
            size: '30%',
            margin: 5,
            background: 'transparent',
          },
          track: {
            background: "#F6EEFF",
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 5,
              fontFamily: "'Cairo' Sans-serif",
              fontSize: '20px',
              fontWeight: 700,
            }
          }
        },
      },
    
      labels: [''],
      responsive: [
        {
          breakpoint: 767,
          options: {        
            legend: {
              position: 'bottom',
              horizontalAlign: 'center'
            }
          }
        }
      ]
    };
    
    var chart_fourtynine = new ApexCharts(document.querySelector("#chart-49"), options2);
    chart_fourtynine.render();
    
    
    // Chart 50
    var options3 = {
      series: [62],
      chart: {
        width: 170,
        height: 280,
        type: 'radialBar',
      },
      colors: ['#5ECFFF'],
      
      plotOptions: {
        radialBar: {
          hollow: {
            size: '30%',
            margin: 5,
            background: 'transparent',
          },
          track: {
            background: "#F6EEFF",
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 5,
              fontFamily: "'Cairo' Sans-serif",
              fontSize: '20px',
              fontWeight: 700,
            }
          }
        },
      },
    
      labels: [''],
      responsive: [
        {
          breakpoint: 767,
          options: {        
            legend: {
              position: 'bottom',
              horizontalAlign: 'center'
            }
          }
        }
      ]
    };
    
    var chart_fifty = new ApexCharts(document.querySelector("#chart-50"), options3);
    chart_fifty.render();
    
  }
}
