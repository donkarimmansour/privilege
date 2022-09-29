import react from 'react'
import Card from './Card'


const List = () => {


    return (
        <div className="tab-pane active" id="Courses-all">
        <div className="row row-deck">
                <div className="col-xl-4 col-lg-4 col-md-6"> <Card /> </div>
                <div className="col-xl-4 col-lg-4 col-md-6"> <Card /> </div>
                <div className="col-xl-4 col-lg-4 col-md-6"> <Card /> </div>
                <div className="col-xl-4 col-lg-4 col-md-6"> <Card /> </div>
                <div className="col-xl-4 col-lg-4 col-md-6"> <Card /> </div>
                <div className="col-xl-4 col-lg-4 col-md-6"> <Card /> </div>
                <div className="col-xl-4 col-lg-4 col-md-6"> <Card /> </div>
        </div>
      </div>
     
        )

}

export default List