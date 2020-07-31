<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://i.imgur.com/WN27uMk.png" width="120" alt="Nest Logo" /></a>
</p>

<h3 align="center">Nest.js + Yup</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Demo / Working](#demo)
- [Usage](#usage)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Integrate `Yup` with `Nest.js`.

## 🎥 Demo / Working <a name = "demo"></a>

![](https://i.imgur.com/G8XBhJB.png)

## 🎈 Usage <a name = "usage"></a>

#### In DTO file

- Create your own `yup schema`.
- Use the decorator `UseSchema`.

```ts
import { UseSchema } from 'nestjs-yup';
```

For example:

```ts
import * as yup from 'yup';
import { UseSchema } from 'nestjs-yup';

export const authSchema = yup.object({
  username: yup.string().required().min(4).max(20),
  password: yup
    .string()
    .required()
    .min(8)
    .max(20)
    .matches(
      /((?=.*\d)|(?=.*\W))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'password too weak',
    ),
});

@UseSchema(authSchema)
export class AuthCredentialsDto {
  username: string;

  password: string;
}
```

#### In Controller file

```ts
import { YupValidationPipe } from 'nestjs-yup';
```

For example:

```ts
 @Post('/signup')
  signUp(
    @Body(YupValidationPipe)
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }
```

### Installing

```
npm i nestjs-yup
```

Don't forget to install `yup` as well.

```
npm i yup
npm i -D @types/yup
```

### Quick Example

Please go to `example` folder.

```
npm run start:dev
```

or running via docker

```
docker-compose up
```

## ✍️ Authors <a name = "authors"></a>

- [@c1495616js](https://github.com/c1495616js) - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

#### References

- https://www.npmjs.com/package/nestjs-yup-validator
- https://www.youtube.com/watch?v=cmZcZb0qxqg
- https://dev.to/nestjs/publishing-nestjs-packages-with-npm-21fm
