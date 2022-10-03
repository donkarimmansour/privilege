import react from 'react'
import Container from '../shared/Container'
import Add from './Add'
import List from './List'



const PaymentsIndex = () => {

  const links = [
    {name : "Privilege" , url : "#"} ,
    {name : "Fees" , url : "#"} ,
]

const tabs = [
    {name : "List" , id : "#Fees-all"} ,
    // {name : "Fees Receipt" , id : "#Fees-Receipt"} ,
    {name : "Add Fees" , id : "#Fees-add"}
]



    return (
      <Container tabs={tabs} links={links}> 
 <div className="tab-content">

      <List />
      <Add />

{/*     
       <div className="tab-pane" id="Fees-Receipt">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">#AB0017</h3>
              <div className="card-options">
                <button type="button" className="btn btn-primary"><i className="si si-printer" /> Print Invoice</button>
              </div>
            </div>
            <div className="card-body">
              <div className="row my-8">
                <div className="col-6">
                  <p className="h3">Company</p>
                  <address>
                    Street Address<br />
                    State, City<br />
                    Region, Postal Code<br />
                    ltd@example.com
                  </address>
                </div>
                <div className="col-6 text-right">
                  <p className="h3">Client</p>
                  <address>
                    Street Address<br />
                    State, City<br />
                    Region, Postal Code<br />
                    ctr@example.com
                  </address>
                </div>
              </div>
              <div className="table-responsive push">
                <table className="table table-bordered table-hover text-nowrap">
                  <tbody><tr>
                      <th className="text-center width35" />
                      <th>Product</th>
                      <th className="text-center" style={{width: '1%'}}>Qnt</th>
                      <th className="text-right" style={{width: '1%'}}>Unit</th>
                      <th className="text-right" style={{width: '1%'}}>Amount</th>
                    </tr>
                    <tr>
                      <td className="text-center">1</td>
                      <td>
                        <p className="font600 mb-1">Logo Creation</p>
                        <div className="text-muted">Logo and business cards design</div>
                      </td>
                      <td className="text-center">1</td>
                      <td className="text-right">$1.800,00</td>
                      <td className="text-right">$1.800,00</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>
                        <p className="font600 mb-1">Online Store Design &amp; Development</p>
                        <div className="text-muted">Design/Development for all popular modern browsers</div>
                      </td>
                      <td className="text-center">1</td>
                      <td className="text-right">$20.000,00</td>
                      <td className="text-right">$20.000,00</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>
                        <p className="font600 mb-1">App Design</p>
                        <div className="text-muted">Promotional mobile application</div>
                      </td>
                      <td className="text-center">1</td>
                      <td className="text-right">$3.200,00</td>
                      <td className="text-right">$3.200,00</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="font600 text-right">Subtotal</td>
                      <td className="text-right">$25.000,00</td>
                    </tr>
                    <tr className="bg-light">
                      <td colSpan={4} className="font600 text-right">Vat Rate</td>
                      <td className="text-right">20%</td>
                    </tr>
                    <tr>
                      <td colSpan={4} className="font600 text-right">Vat Due</td>
                      <td className="text-right">$5.000,00</td>
                    </tr>
                    <tr className="bg-green text-light">
                      <td colSpan={4} className="font700 text-right">Total Due</td>
                      <td className="font700 text-right">$30.000,00</td>
                    </tr>
                  </tbody></table>
              </div>
              <p className="text-muted text-center">Thank you very much for doing business with us. We look forward to working with you again!</p>
            </div>
          </div>
        </div> */}
       
      </div>
      </Container>
    )

}
 
export default PaymentsIndex