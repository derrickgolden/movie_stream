import { useState, useEffect, useRef } from 'react'
import DataTable from 'react-data-table-component'

type DataTableComponentProps = {
  apidata: [], columns: [], search: string
}
export default function DataTable_Component({ apidata, columns, search }: DataTableComponentProps) {
  const [data, setData] = useState([])
  const [datafilter, setFilter] = useState('')
  const [datafinals, setFinals] = useState([])

  useEffect(() => {
    let result = data.filter(val => {
      if (search == 'title') {
        return val?.title?.toLowerCase().match(datafilter?.toLowerCase());
      }else if(search == 'name'){
        return val?.name?.toLowerCase().match(datafilter?.toLowerCase());
      }else if(search == 'phone'){
        return val?.phone.match(datafilter);
      }else if(search == 'movie name'){
        return val?.movie_name?.toLowerCase().match(datafilter?.toLowerCase());
      }else if(search == 'movie status'){
        return val?.status?.toLowerCase().match(datafilter?.toLowerCase());
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