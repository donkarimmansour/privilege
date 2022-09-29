import react from 'react'
import Chart from 'react-apexcharts'


const University = () => {

    const settings = {

        height: 350,
        type: 'line',

        series: [{
            name: 'Fees',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Donation',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],


        options : {
           
            chart: {
                toolbar: {
                    show: false,
                },
            },
            colors: ['#7568a7', '#fed284'],
           
            stroke: {
                width: [0, 4]
            },        
            // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
                type: 'datetime'
            },
            yaxis: [{
                title: {
                    text: 'Fees',
                },
    
            }, {
                opposite: true,
                title: {
                    text: 'Donation'
                }
            }]
        }
       
    }

    return  (
        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">University Report</h3>
                                    <div className="card-options">
                                        <a href="#" className="card-options-collapse" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a>
                                        <a href="#" className="card-options-fullscreen" data-toggle="card-fullscreen"><i className="fe fe-maximize"></i></a>
                                        <a href="#" className="card-options-remove" data-toggle="card-remove"><i className="fe fe-x"></i></a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-sm-flex justify-content-between">
                                        <div className="font-12 mb-2"><span>Measure How Fast You’re Growing Monthly Recurring Revenue. <a href="#">Learn More</a></span></div>
                                        <div className="selectgroup w250">
                                            <label className="selectgroup-item">
                                                <input type="radio" name="intensity" value="low" className="selectgroup-input" defaultChecked />
                                                <span className="selectgroup-button">1D</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="radio" name="intensity" value="medium" className="selectgroup-input" />
                                                <span className="selectgroup-button">1W</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="radio" name="intensity" value="high" className="selectgroup-input" />
                                                <span className="selectgroup-button">1M</span>
                                            </label>
                                            <label className="selectgroup-item">
                                                <input type="radio" name="intensity" value="veryhigh" className="selectgroup-input" />
                                                <span className="selectgroup-button">1Y</span>
                                            </label>
                                        </div>
                                    </div>


                                    {/* <div id="apex-chart-line-column"></div> type={settings.type}*/}
                                    <Chart options={settings.options} series={settings.series} height={settings.height}  />

                                </div>




                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-xl-3 col-md-6 mb-2">
                                            <div className="clearfix">
                                                <div className="float-left"><strong>Fees</strong></div>
                                                <div className="float-right"><small className="text-muted">35%</small></div>
                                            </div>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar bg-indigo" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="text-uppercase font-10">Compared to last year</span>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-2">
                                            <div className="clearfix">
                                                <div className="float-left"><strong>Donation</strong></div>
                                                <div className="float-right"><small className="text-muted">61%</small></div>
                                            </div>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar bg-yellow" role="progressbar" style={{width: "61%"}} aria-valuenow="61" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="text-uppercase font-10">Compared to last year</span>
                                        </div> 
                                        <div className="col-xl-3 col-md-6 mb-2">
                                            <div className="clearfix">
                                                <div className="float-left"><strong>Income</strong></div>
                                                <div className="float-right"><small className="text-muted">87%</small></div>
                                            </div>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar bg-green" role="progressbar" style={{width: "87%"}} aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="text-uppercase font-10">Compared to last year</span>
                                        </div>
                                        <div className="col-xl-3 col-md-6 mb-2">
                                            <div className="clearfix">
                                                <div className="float-left"><strong>Expense</strong></div>
                                                <div className="float-right"><small className="text-muted">42%</small></div>
                                            </div>
                                            <div className="progress progress-xs">
                                                <div className="progress-bar bg-pink" role="progressbar" style={{width: "42%"}} aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span className="text-uppercase font-10">Compared to last year</span>
                                        </div>                                                                       
                                    </div>
                                </div>
                            </div>
                        </div>
    )

}

export default University