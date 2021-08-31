import JSONDATA from "../../Mock.json";
import "./mystyle.css";
import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";


const Index = () => {
  const [dataArray, setData] = useState({ post: [] });
  const [edit, setEdit] = useState({ id: "", name:"", designation:"" });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setData({ post: JSONDATA });
  }, []);

  

  const onSubmit = (data) => {
    console.log("this is onsubmit ", data);
    let updatedData = dataArray.post;
    updatedData.push(data);

    setData({ post: updatedData });
    setModalIsOpen(false);
  };



  const handleEdit = (e, id , user) => {
    e.preventDefault();
    setEdit({ id: id ,name:user.name , designation:user.designation});
    
  };



  const handleUpdate = (e) => {
    e.preventDefault();
    let user = {
      name:edit.name,
      designation:edit.designation
    };
    let updatedArray = dataArray.post;
    updatedArray[edit.id] = user;
    setData({post:updatedArray})
    setEdit({id:""})
    console.log("this is new info",edit)
  }



  const handleDelete = (e, id) => {
    e.preventDefault();
    console.log(55555555, dataArray);
    var deleteData = dataArray.post;
    deleteData.splice(id, 1);
    setData({ post: deleteData });
  };



  return (
    <div>
      <button
        className="btn btn-success bt"
        onClick={() => setModalIsOpen(true)}
      >
        Add Post
      </button>
      { modalIsOpen && <NewPost modalIsOpen={modalIsOpen}  setModalIsOpen={setModalIsOpen} onSubmit={onSubmit}/>}
      <div className="App">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {dataArray.post.map((item, key) => {
            {
              console.log("this is id", edit.id);
            }
            return (
              <tbody>
                <tr>
                  <th scope="row" key={key}>
                    {" "}
                    {key + 1}
                  </th>
                  <td>
                    {" "}
                    {edit.id === key ? (
                      <input type="text" 
                        name="name"
                        className="field"
                        value={edit.name}
                        onChange={(e)=>setEdit({...edit,name:e.target.value})}
                      />
                    ) : (
                      <span> {item.name} </span>
                    )}{" "}
                  </td>
                  <td>
                    {edit.id === key ? (
                      <input type="text" 
                        name="designation"
                        value={edit.designation}
                        onChange={(e)=>setEdit({...edit,designation:e.target.value})}

                        className="field"
                      />
                    ) : (
                      <span>{item.designation} </span>
                    )}
                  </td>
                  <td>
                    {edit.id === key ? (
                      <button className="btn btn-success" onClick={(e)=> handleUpdate(e)}>Update Data</button>
                    ) : (
                      <>
                        <button
                          className="btn btn-danger"
                          onClick={(e) => handleDelete(e, key)}
                        >
                          DELETE
                        </button>
                        <button
                          className="btn btn-success"
                          onClick={(e) => handleEdit(e, key , item)}
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Index;
