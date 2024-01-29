// app.controller.ts
import { Controller, Options } from '@nestjs/common';

@Controller()
export class AppController {
  @Options('*')
  handleOptions() {
    // Your CORS headers for preflight requests
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Replace with your Angular app's URL
        'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
       
      },
    };
  }
}
