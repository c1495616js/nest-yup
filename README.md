<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/FxL5qM0.jpg" alt="Bot logo"></a>
</p>

<h3 align="center">Nest.js-Yup</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Platform](https://img.shields.io/badge/platform-reddit-orange.svg)](https://www.reddit.com/user/Wordbook_Bot)
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 🤖 Few lines describing what your bot does.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Demo / Working](#demo)
- [How it works](#working)
- [Usage](#usage)
- [Getting Started](#getting_started)
- [Deploying your own bot](#deployment)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Integrate `Yup` with `Nest.js`.

## 🎥 Demo / Working <a name = "demo"></a>

![Working](https://media.giphy.com/media/20NLMBm0BkUOwNljwv/giphy.gif)

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

## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
  https://dev.to/nestjs/publishing-nestjs-packages-with-npm-21fm
