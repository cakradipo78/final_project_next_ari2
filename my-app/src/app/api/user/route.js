export function GET() {



    return new response (

        JSON.stringify({

            data: users
        },
        {

            staus: 200,
            header : {
                "content-Type" : "application /"
            }
        }
    
    )
    )
}

export async function POST (request){


}