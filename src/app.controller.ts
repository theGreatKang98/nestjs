import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    Home(){
        return 'home'
    }
}
