import React, { useState, useEffect, useMemo } from 'react'
import MaterialReactTable from "material-react-table"
import axios , {AxiosRequestConfig} from 'axios';

function Candidate() {


    const [ticket, setTicket] = useState<any[]>([]);

    const token = sessionStorage.getItem('react-token');

    console.log(token);

    const fetchData = async () => {

        try {
            const config: AxiosRequestConfig = {

                method: 'GET',

                url: "https://api-gateway.techsophy.com/api/form-runtime/v1/form-data?page=0&size=10&formId=1093065554979373056",

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

                accessorKey: 'formData.nameOfTheApplicant', //access nested data with dot notation

                header: 'nameOfTheApplicant',

            },

            {

                accessorKey: 'formData.candidateIdOfTheApplicant',

                header: 'candidateIdOfTheApplicant',

            },

            {

                accessorKey: 'formData.isFresher', //normal accessorKey

                header: 'isFresher',

            },

            {

                accessorKey: 'formData.dateOfBirthOfTheApplicant',

                header: 'dateOfBirthOfTheApplicant',

            },
            {

                accessorKey: 'formData.genderOfTheApplicant', //normal accessorKey

                header: 'genderOfTheApplicant',

            },
            {

                accessorKey: 'formData.emailOfTheApplicant', //normal accessorKey

                header: 'emailOfTheApplicant',

            },
            {

                accessorKey: 'formData.emailOfTheApplicant', //normal accessorKey

                header: 'emailOfTheApplicant',

            },
            {

                accessorKey: 'formData.phoneNumberOfTheApplicant', //normal accessorKey

                header: 'phoneNumberOfTheApplicant',

            },
            {

                accessorKey: 'formData.githubOfTheApplicant', //normal accessorKey

                header: 'githubOfTheApplicant',

            },
            {

                accessorKey: 'formData.jobRole', //normal accessorKey

                header: 'jobRole',

            },
            {

                accessorKey: 'formData.jobId', //normal accessorKey

                header: 'jobId',

            },

        ],

        [],

    );



    return <MaterialReactTable columns={columns} data={ticket} />;

};
    


export default Candidate;
