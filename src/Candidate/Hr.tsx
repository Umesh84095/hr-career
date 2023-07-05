import React, { useState, useEffect, useMemo } from 'react'
import MaterialReactTable from "material-react-table"
import axios , {AxiosRequestConfig} from 'axios';

function Hr() {


    const [ticket, setTicket] = useState<any[]>([]);

    const token = sessionStorage.getItem('react-token');

    console.log(token);

    const fetchData = async () => {

        try {
            const config: AxiosRequestConfig = {

                method: 'GET',

                url: "https://api-gateway.techsophy.com/api/form-runtime/v1/form-data?page=0&size=10&formId=1098576140064440320",

                headers: {

                    "content-type": "application/json",

                    authorization: `Bearer ${token}`,

                },

            };



            const response = await axios(config);

            console.log(response.data.data.content);

            setTicket(response.data.data.content); // Handle the response data

        } catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

        fetchData();





    }, []);




    const columns = useMemo<any[]>(

        () => [

            {

                accessorKey: 'formData.usernameOfTheHr', //access nested data with dot notation

                header: 'usernameOfTheHr',

            },

            {

                accessorKey: 'formData.passwordOfTheHr',

                header: 'passwordOfTheHr',

            },
        ],

        [],

    );



    return <MaterialReactTable columns={columns} data={ticket} />;

};
    


export default Hr;

