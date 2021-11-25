var ctx = document.getElementById("myChart2");
                    var myChart = new Chart(ctx, {                        
                        type: 'pie',                            
                        data: { 
                            // labels: [
                            //         <?php
                            //         foreach ($komplainperkategori as $data) {
                            //           echo "\"".$data->kategori."\"".",";
                            //         };
                            //          ?>
                            //         ],                           
                            datasets: [{                                    
                                    data: [
                                    <?php
                                    foreach ($komplainperkategori as $data) {
                                      echo $data->jumlah.",";
                                    };
                                     ?>
                                    ],

                                    backgroundColor: [
                                        <?php 
                                        foreach ($komplainperkategori as $data) {
                                          if ($data->id_kategori == 1) {
                                            echo "'#DD4B39',";
                                          }
                                          else if ($data->id_kategori == 2) {
                                            echo "'#00A65A',";
                                          }
                                          else if ($data->id_kategori == 3) {
                                            echo "'#F39C12',";
                                          }
                                          else if ($data->id_kategori == 4) {
                                            echo "'#00C0EF',";
                                          }
                                          else if ($data->id_kategori == 5) {
                                            echo "'#3C8DBC',";
                                          }
                                          else if ($data->id_kategori == 6) {                                            
                                            echo "'#605CA8',";
                                          }

                                          else if ($data->id_kategori == 7) {
                                            echo "'#111111',";
                                          }

                                          else if ($data->id_kategori == 8) {
                                            echo "'#D2D6DE',";
                                          }                                          
                                          
                                        }
                                        ?>
                                    ],

                                    borderColor: '#E3E3E3',
                                   
                                    borderWidth: 1
                                }]
                        },

                        options: {              
                          legend: {
                            display: false
                         },                         

                         tooltips: {
                            enabled: true,                                                        
                            mode: 'single',  // this is the Chart.js default, no need to set
                            callbacks: {
                                label: function (tooltipItems, data) {
                                    var i, label = [], l = data.datasets.length;
                                    for (i = 0; i < l; i += 1) {
                                        label[i] = ' ' + data.datasets[i].data[tooltipItems.index];
                                    }
                                    return label;
                                }
                            }
                          }
                        
                        },
                    });    