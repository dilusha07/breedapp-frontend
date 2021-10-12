import React, {useState} from "react";
import axios from 'axios';

  
const search = () => {

    const [searchdata, setSearchdata] = useState("");

    const onChangeSearchdata = e => {
    const searchdata = e.target.value;
    setSearchdata(searchdata);
  };

  const findBydata = data => {
    return http.get(`/breeds?data=${data}`);
  };
  

    findBydata(searchdata)
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
 
  
  
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={findByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        </div>
        );

    };
        