import { configureStore } from "@reduxjs/toolkit";
import themereducer from "./themereducer";

export default configureStore({reducer: {changeTheme : themereducer }});