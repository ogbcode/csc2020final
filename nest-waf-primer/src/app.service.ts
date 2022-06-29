import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHello2(): {message: string, title: string} {
    return {message: 'Hello World!', title: 'My Greeting App'};
  }

  getHome(): {title: string} {
    return {title: 'Home Page'};
    }

  getAboutUs(): {title: string} {
    return {title: 'About Us Page'};
    }
}
    

