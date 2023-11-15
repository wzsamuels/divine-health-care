import { NextResponse } from 'next/server';
import { SES } from "@aws-sdk/client-ses";

const ses = new SES({apiVersion: '2010-12-01'})

export async function POST(request: Request) {
  const res = await request.json();

  console.log(res);

  let data = '';

  for(const[key, value] of Object.entries(res)) {
    data += `${key}: ${value}` + '\n';
  }

  const params = {
    Destination: {
      ToAddresses: [
        'wzsamuels@gmail.com',
      ]
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: data
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'DPS 360 Contact Email'
      }
    },
    Source: 'auto-mail@twinsilverdesign.com' /* required */
  };

// Create the promise and SES service object
  let result = await ses.sendEmail(params);
  console.log(result);

  return NextResponse.json(result)
}