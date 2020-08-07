import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import { notesDataApi } from "../../services/notes-data-api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Items from "../../components/Items";
import SimpleModal from "../../components/SimpleModal";

function Home() {
  const [openModal, setopenModal] = useState(false);
  const [itemsArray, setitemsArray] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState({});

  //componentDidMount()
  useEffect(() => {
    notesDataApi
      .getTasks(1)
      .then((res) => res.json())
      .then((items) => {
        console.log(items);
        const allItems = items.map((item) => ({
          id: item.id,
          name: item.title,
          description: item.body,
        }));
        setitemsArray(allItems);
      });
  }, []);

  const handleOpen = () => {
    setopenModal(true);
  };

  const handleClose = () => {
    setopenModal(false);
  };

  const getItemToEdit = (id) => {
    const itemIndex = itemsArray.find((item) => item.id === id);
    const tempItem = { ...itemIndex };
    setItemToEdit(tempItem);
    setIsEditing(true);
    handleOpen();
  };

  const removeFromList = (id) => {
    const tempList = [...itemsArray];
    const itemIndex = itemsArray.findIndex((item) => item.id === id);
    notesDataApi
      .deleteTask(id)
      .then((res) => res.json())
      .then(() => {
        tempList.splice(itemIndex, 1);
        setitemsArray(tempList);
      });
  };

  const addToList = (item) => {
    const tempList = [...itemsArray];
    const newIndex = uuidv4();
    item.id = newIndex;
    console.log(item);
    notesDataApi
      .createTask(item)
      .then((res) => res.json())
      .then(() => {
        tempList.push(item);
        setitemsArray(tempList);
      });
  };

  const editFromList = (item) => {
    const tempList = [...itemsArray];
    const itemIndex = itemsArray.findIndex((element) => element.id === item.id);

    notesDataApi
      .putTask(item)
      .then((res) => res.json())
      .then(() => {
        tempList[itemIndex] = { ...item };
        setitemsArray(tempList);
        setItemToEdit({});
        setIsEditing(false);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container>
        <Items
          items={itemsArray}
          getItemToEdit={getItemToEdit}
          removeFromList={removeFromList}
        />
      </Container>
      <SimpleModal
        open={openModal}
        handleClose={handleClose}
        addToList={addToList}
        isEditing={isEditing}
        itemToEdit={itemToEdit}
        editFromList={editFromList}
      />
      <Footer handleOpen={handleOpen} />
    </React.Fragment>
  );
}

export default Home;
