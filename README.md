# Lap


[![hexo-image]][hexo-url]

Lap is a simple blog theme what has basic functions, it borrows styles from some bootstrap themes, but it focus on writing and communicating.


# Demo

![](http://owgraa3f3.bkt.clouddn.com/18-2-7/12524036.jpg)

You can preview my blog: [boseny.me]

## Install

```
//cd your hexo theme directory
git clone https://github.com/BosenY/Lap.git
```

## Enable

Modify `theme` setting in site's `_config.yml` to `Lap`:

```yaml
theme: Lap
```
## More Config

Setting these in your `theme's `   ` _config.yml`
```yaml
# Social links
social:
  GitHub:
    key: github
    link: https://github.com/Boseny
  # Twitter: https://twitter.com/your-user-name
  微博:
    key: weibo
    link: https://weibo.com/boseny
  # 豆瓣: http://douban.com/people/your-user-name
  知乎:
    key: zhihu
    link: https://www.zhihu.com/people/boseny
  Lofter:
    key: lofter
    link: http://boseny.lofter.com/
  # 等等。。。

# disqus comment
disqus: false
disqus_shortname:

# livere comment
livere: false
livere_uid:

#Gitment (Recommended Use) see https://imsun.net/posts/gitment-introduction/
Gitment: true
Gitment_client_id:
Gitment_client_secret:
Gitment_Github_id:
repo:

# google analytics
googleTrackId:

toc:
  enable: true

# anchorjs
anchorjs: true

# sidebar search
search: true
# sidebar categories
categories: true
# sidebar links
links: true
```

## Other

You can set bgimg in current markdown:

```
#bg-img config
headerImg: /images/chunwu-bg.jpg

```
and then add bg.jpg to the  source/images directory






[boseny.me]: https://boseny.me
[hexo-url]: http://hexo.io
[hexo-image]: https://img.shields.io/badge/hexo-%3E%3D%203.0-blue.svg
