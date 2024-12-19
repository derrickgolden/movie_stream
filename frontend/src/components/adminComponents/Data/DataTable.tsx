import { useState, useEffect, useRef } from 'react'
import DataTable from 'react-data-table-component'
export default function DataTable_Component({ apidata, columns, search }) {
  const [data, setData] = useState([])
  const [datafilter, setFilter] = useState('')
  const [datafinals, setFinals] = useState([])

  useEffect(() => {
    let result = data.filter(val => {
      if (search == 'name') {
        const fullName = `${val.first_name} ${val.last_name}`.toLowerCase();
        return fullName.toLowerCase().match(datafilter?.toLowerCase())
      }
      else if (search == 'Sender Email') {
        return val.sender_email?.toLowerCase().match(datafilter?.toLowerCase())
      }
    })

    setFinals(result)

  }, [datafilter])

  useEffect(() => {
    setFinals(apidata)
    setData(apidata)
  }, [apidata])



  return (
    <>

      <div className="table-responsive ">
        <DataTable
          columns={columns}
          data={datafinals}
          pagination
          fixedHeader
          highlightOnHover
          responsive
          subHeader
          noHeader
          subHeaderComponent={
            <div className="row justify-content-start">
              <div className="col-12">
                <input type="text" placeholder={`search with ${search}`} className="form-control " 
                  value={datafilter} onChange={(e) => setFilter(e.target.value)} 
                />
              </div>
            </div>
           }
        />
      </div>
    </>
  )
}