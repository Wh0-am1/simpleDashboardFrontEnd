import axios from "axios";

export default async function uploadAPI(payload, thunkAPI) {
    try {
        axios
            .post("http://localhost:3000/api/v1/fileUpload", payload)
            .then((res) => res.data)
            .catch((e) => thunkAPI.rejectWithValue(e));
    } catch (e) {
        console.log(e);
    }
}
