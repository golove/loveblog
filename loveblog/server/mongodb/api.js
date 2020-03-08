let Router = require('koa-router');
// const Passport = require('../utils/passport.js')
const DB = require('./mongodb');


const router = new Router({
  prefix: '/api' // 路由前缀
})

router //bolgcontent
  .get('/myletter', async ctx => {
    let res = await DB.find('myletter', ctx.request.body);
    ctx.body = res
  })

  .post('/insert', async ctx => {
    console.log(ctx.request.body)
  })

  // 上传头像图片
  .post("/uploadavatar", async ctx => {
    let res = await DB.insert('avatar', ctx.request.body);
    try {
      if (res.result.ok) {
        ctx.body = res
      }
    } catch (err) {
      console.log(err)
    }
  })
  // 请求头像数据
  .get('/dlavatar', async ctx => {
    let res = await DB.find('avatar', ctx.request.body);
    console.log(res)
    ctx.body = res

  })


  .post('/addArray', async ctx => {
    let e = ctx.request.body
    let id = e.id
    delete (e.id)
    let res = await DB.updateArray('myletter', { _id: DB.setObjectId(id) }, e);
    try {
      if (res.result.ok) {
        ctx.body = "更新成功"
      }
    } catch (err) {
      console.log(err)
    }
  })

  .post('/delArray', async ctx => {
    let e = ctx.request.body
    let id = e.id
    delete (e.id)
    let res = await DB.deleteArray('myletter', { _id: DB.setObjectId(id) }, e);
    try {
      if (res.result.ok) {
        ctx.body = "更新成功"
      }
    } catch (err) {
      console.log(err)
    }
  })

  .post('/updateInt', async ctx => {
    let e = ctx.request.body
    let id = e.id
    delete (e.id)
    console.log(e)
    let res = await DB.updateInt('myletter', { _id: DB.setObjectId(id) }, e);
    ctx.body = {
      status: 200,
      msg: 'ok',
      data: res
    }

  })
  //删除blog
  .post("/delete", async ctx => {
    let id = ctx.request.body._id;
    let res = await DB.update('myletter', {
      _id: DB.setObjectId(id)
    }, {
      delete: 1
    })
    if (res.result.ok) {
      ctx.body = "删除成功"
    }
  })


  // 注册

  .post('/signup', async (ctx) => {

    let userName = ctx.request.body.username
    let Email = ctx.request.body.email
    let user = await DB.find('users', {
      username: userName
    })
    let uemail = await DB.find('users', {
      email: Email
    })
    // console.log(user)
    if (user.length === 0 && uemail.length === 0) {
      // 创建新用户
      let res = await DB.insert('users', ctx.request.body);
      console.log(res)
      try {
        if (res.result.ok) {
          ctx.body = {
            status: 200,
            data: {
              "userName": res.ops[0].username,
              "id": res.ops[0]._id,
              "email": res.ops[0].email,
              "imgsrc": res.ops[0].imgsrc,
              "delFlag": res.ops[0].delflag,
              "tel": res.ops[0].tel,
              "time": res.ops[0].creationdate,
              "gender": res.ops[0].gender,
              "age": res.ops[0].age,
              "signature": res.ops[0].signature,
            },
            msg: '注册成功'
          }
        }
      } catch (error) {
        ctx.body = {
          status: 0,
          msg: '注册失败'
        }
        console.log(error);
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '该用户名或者邮箱已被注册,请从新输入!'
      }
    }

  })
  // 登录
  .post('/signin', async (ctx) => {
    let res = await DB.find('users', ctx.request.body);
    console.log(ctx.request.body)
    try {

      ctx.body = {
        status: 200,
        data: {
          "userName": res[0].username,
          "id": res[0]._id,
          "email": res[0].email,
          "imgsrc": res[0].imgsrc,
          "delflag": res[0].delflag,
          "tel": res[0].tel,
          "time": res[0].creationdate,
          "gender": res[0].gender,
          "age": res[0].age,
          "signature": res[0].signature,
        },
        msg: '登录成功'
      }

    } catch (error) {
      ctx.body = {
        status: 0,
        msg: '登录失败'
      }
      console.log(error);
    }
  })

  // 更新用户信息
  .post('/updateUser', async (ctx) => {
    let data = ctx.request.body;
    let id = data.id;
    delete (data.id)
    let res = await DB.update('users', {
      '_id': DB.setObjectId(id)
    }, data);
    try {
      if (res.result.ok) {
        ctx.body = res
      }
    } catch (err) {
      console.log(err);
    }
  })

  // 图片上传
  .post('/upload', async ctx => {
    console.log(ctx)
  })



module.exports = router;