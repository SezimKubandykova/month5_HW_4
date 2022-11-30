import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeTitleSetTimeAction} from "../../redux/actions";
function MainPage () {

  const dispatch = useDispatch()

  const title = useSelector(state => state.titleReducer.title)

  const changeTitle = () => {
    dispatch(changeTitleSetTimeAction())
  }

  return (
      <>
        <h1>{title}</h1>
        <button onClick={changeTitle}>change title</button>
      </>
  )
}
export default MainPage;