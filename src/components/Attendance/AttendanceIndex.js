import react from 'react'
import Container from '../shared/Container'



const AttendanceIndex = () => {

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Attendance" , url : "#"} 
  ]

const tabs = []
const btns = [<a href="javascript:void(0)" className="btn btn-info btn-sm">Export Excel</a>]



    return (
      <Container tabs={tabs} links={links} btns={btns}> 
          
          <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="table-responsive">                                
              <table className="table table-sm table-hover table-striped table-vcenter mb-0 text-nowrap">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>8</th>
                    <th>9</th>
                    <th>10</th>
                    <th>11</th>
                    <th>12</th>
                    <th>13</th>
                    <th>14</th>
                    <th>15</th>
                    <th>16</th>
                    <th>17</th>
                    <th>18</th>
                    <th>19</th>
                    <th>20</th>
                    <th>22</th>
                    <th>23</th>
                    <th>24</th>
                    <th>25</th>
                    <th>26</th>
                    <th>27</th>
                    <th>28</th>
                    <th>29</th>
                    <th>30</th>
                    <th>31</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>                               
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                  </tr>
                  <tr>
                    <td>Tim Hank</td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                  </tr>
                  <tr>
                    <td>Frank Camly</td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                  </tr>
                  <tr>
                    <td>Gary Camara</td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                  </tr>
                  <tr>
                    <td>Fidel Tonn</td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                  </tr>
                  <tr>
                    <td>Tim Hank</td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                  </tr>
                  <tr>
                    <td>Maryam Amiri</td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                  </tr>
                  <tr>
                    <td>Hossein Shams</td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-unfollow text-warning" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-following" /> </td>                                            
                    <td><i className="icon-user-following" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-unfollow text-danger" /> </td>
                    <td><i className="icon-user-following" /> </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      </Container>
    )

}

export default AttendanceIndex 