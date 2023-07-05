import React, { useState, useEffect, useMemo } from 'react'
import MaterialReactTable from "material-react-table"
import axios , {AxiosRequestConfig} from 'axios';

function Jobposting() {


    const [ticket, setTicket] = useState<any[]>([]);

    const token = sessionStorage.getItem('react-token');

    console.log(token);

    const fetchData = async () => {

        try {
            const config: AxiosRequestConfig = {

                method: 'GET',

                url: "https://api-gateway.techsophy.com/api/form-runtime/v1/form-data?page=0&size=1000&formId=1093117742321680384",

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

                accessorKey: 'formData.jobId', //access nested data with dot notation

                header: 'jobId',

            },

            {

                accessorKey: 'formData.jobTitle',

                header: 'jobTitle',

            },

            {

                accessorKey: 'formData.numberOfVacancies', //normal accessorKey

                header: 'numberOfVacancies',

            },

            {

                accessorKey: 'formData.jobDescriptionLink',

                header: 'jobDescriptionLink',

            },
            {

                accessorKey: 'formData.intermediateSkills', //normal accessorKey

                header: 'intermediateSkills',

            },
            {

                accessorKey: 'formData.expertSkills', //normal accessorKey

                header: 'expertSkills',

            },
            {

                accessorKey: 'formData.candidateRequirements', //normal accessorKey

                header: 'candidateRequirements',

            },
            {

                accessorKey: 'formData.isJobIdActive', //normal accessorKey

                header: 'isJobIdActive',

            },

        ],

        [],

    );



    return <MaterialReactTable columns={columns} data={ticket} />;

};
    


export default Jobposting;
