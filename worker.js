/**
 *  现代化导航网站配置
 */
const config = {
    title: "皮卡工具导航",
    subtitle: "一站式工具与资源平台",
    logo_icon: "bolt",
    search: true,
    search_engine: [
        { name: "谷歌",     template: "https://www.google.com/search?q=$s" },
        { name: "百度",     template: "https://www.baidu.com/s?wd=$s" },
        { name: "Bing",     template: "https://www.bing.com/search?q=$s" },
        { name: "抖音",     template: "https://www.douyin.com/search/$s" },
        { name: "知乎",     template: "https://www.zhihu.com/search?type=content&q=$s" },
        { name: "千问",     template: "https://www.tongyi.com/qianwen/?q=$s" },
        { name: "混元",     template: "https://yuanbao.tencent.com/chat/naQivTmsDa?q=$s" },
        { name: "BiliBili",      template: "https://search.bilibili.com/all?keyword=$s" },
        { name: "Kimi",     template: "https://www.kimi.com/?q=$s" },
        { name: "DuckDuckGo",     template: "https://duckduckgo.com/?q=$s" },
        { name: "ChatGPT",  template: "https://chatgpt.com/?q=$s&hints=search" },
        { name: "Gemini",   template: "https://gemini.google.com/app?q=$s" },
        { name: "Grok",     template: "https://grok.com/?q=$s" },
        { name: "DeepSeek", template: "https://chat.deepseek.com/?q=$s" },
        { name: "YouTube",  template: "https://www.youtube.com/results?search_query=$s" },
        { name: "GitHub",   template: "https://github.com/search?q=$s&type=repositories" }
    ],
    themes: [
        { key: "light",    name: "亮色UI",     icon: "sun",           kind: "base" },
        { key: "dark",     name: "暗色UI",     icon: "moon",          kind: "base" },
        { key: "march7",   name: "三月七",   icon: "snowflake",     kind: "anime",
          pc:     "https://patchwiki.biligame.com/images/sr/e/e6/57h91ahf93rtqa7hn2x7d0rgehtcdg9.png",
          mobile: "https://patchwiki.biligame.com/images/sr/3/31/9fa1lelfm2d1mn0g7i9gys0d2zmia44.png" },
        { key: "gura",     name: "鲨鲨妹", icon: "fish",         kind: "anime",
          pc:     "https://scrmbl.imgix.net/posts-images/2025/04/gawr-gura-a.jpg",
          mobile: "https://scrmbl.imgix.net/posts-images/2025/04/gawr-gura-a.jpg" },
        { key: "umaru",    name: "干物妹", icon: "cookie-bite",  kind: "anime",
          pc:     "https://haowallpaper.com/link/common/file/previewFileImg/15063312094498112",
          mobile: "https://haowallpaper.com/link/common/file/previewFileImg/15063312094498112" },
        { key: "pikachu",  name: "皮卡丘",   icon: "bolt",          kind: "anime",
          pc:     "https://i.imgur.com/6QX2a1c.jpg",
          mobile: "https://i.pinimg.com/736x/b5/d3/94/b5d3942429c0ebde0f82f918c586a2d1.jpg" }
    ],
    lists: [
        {
            name: "皮卡工具",
            icon: "tools",
            list: [
                {
                    url: "https://aichat.524228.xyz",
                    name: "AI在线聊天",
                    desc: "智能AI对话工具"
                },
                {
                    url: "https://aidraw.524228.xyz",
                    name: "AI在线画图",
                    desc: "AI图像生成工具"
                },
                {
                    url: "https://ipaddr.524228.xyz",
                    name: "IP地址查看",
                    desc: "查看当前IP地址"
                },
                {
                    url: "https://dnspod.524228.xyz",
                    name: "DoH代理服务",
                    desc: "安全、快速的DNS解析服务"
                },
                {
                    url: "https://github.524228.xyz",
                    name: "Github代理",
                    desc: "GitHub访问代理"
                },
                {
                    url: "https://gitorg.524228.xyz",
                    name: "Github代理（修改地址）",
                    desc: "GitHub访问代理，通过可变URL实现"
                },
                {
                    url: "https://etpage.524228.xyz",
                    name: "EasyTier节点共享平台",
                    desc: "EasyTier节点共享平台"
                },
                {
                    url: "https://valuts.524228.xyz",
                    name: "BitWarden三方托管平台",
                    desc: "存储您的密码和敏感信息"
                },
                {
                    url: "https://docker.524228.xyz",
                    name: "Docker代理",
                    desc: "Docker镜像代理服务"
                },
                {
                    url: "https://dnspod.524228.xyz",
                    name: "DoH代理服务",
                    desc: "安全、快速的DNS解析服务"
                },
                {
                    url: "https://ittool.524228.xyz",
                    name: "IT工具集合",
                    desc: "各种IT实用工具"
                },
                {
                    url: "https://coding.524228.xyz",
                    name: "皮卡代码站",
                    desc: "代码分享平台"
                },
                {
                    url: "https://scribe.524228.xyz",
                    name: "订阅生成器",
                    desc: "生成各种订阅链接"
                },
                {
                    url: "https://newssl.524228.xyz",
                    name: "在线证书站",
                    desc: "SSL证书管理工具"
                },
                {
                    url: "https://mailer.524228.xyz",
                    name: "临时邮箱站",
                    desc: "临时邮箱服务"
                },
                {
                    url: "https://images.524228.xyz",
                    name: "随机必应图",
                    desc: "获取随机必应图片"
                },
                {
                    url: "https://photon.524228.xyz",
                    name: "图片处理站",
                    desc: "在线图片处理工具"
                },

                {
                    url: "https://onecdn.524228.xyz",
                    name: "Onedrive站",
                    desc: "OneDrive文件管理"
                },
                {
                    url: "https://paints.524228.xyz",
                    name: "PS在线使用",
                    desc: "在线Photoshop工具"
                },
                {
                    url: "https://paster.524228.xyz",
                    name: "在线剪贴板",
                    desc: "在线剪贴板服务"
                },
                {
                    url: "https://search.524228.xyz",
                    name: "在线导航站",
                    desc: "网站导航服务"
                },
                {
                    url: "https://testca.524228.xyz",
                    name: "测试证书CA",
                    desc: "测试证书颁发机构"
                },
                {
                    url: "https://unlock.524228.xyz",
                    name: "音乐解锁平台",
                    desc: "一键去除音乐加密"
                },
            ]
        },
        {
            name: "视频影音",
            icon: "video",
            list: [
                {
                    url: "https://bilibili.com",
                    name: "哔哩哔哩",
                    desc: "B站弹幕视频网站"
                },
                {
                    url: "https://youtube.com",
                    name: "YouTube",
                    desc: "全球最大视频平台"
                },
                {
                    url: "https://y.qq.com",
                    name: "QQ音乐",
                    desc: "腾讯音乐平台"
                },
                {
                    url: "https://music.163.com",
                    name: "网易云音乐",
                    desc: "网易音乐平台"
                },
                {
                    url: "https://shared.pika.net.cn/Mediums/CinemaHD",
                    name: "皮卡电影",
                    desc: "皮卡电影资源"
                },
                {
                    url: "https://forum.gamer.com.tw/",
                    name: "巴哈姆特",
                    desc: "台湾游戏论坛"
                },
                {
                    url: "https://v.qq.com",
                    name: "腾讯视频",
                    desc: "腾讯视频平台"
                },
                {
                    url: "https://iqiyi.com",
                    name: "爱奇艺",
                    desc: "爱奇艺视频平台"
                },
                {
                    url: "https://youku.com",
                    name: "优酷",
                    desc: "优酷视频平台"
                },
                {
                    url: "https://mgtv.com",
                    name: "芒果 TV",
                    desc: "湖南卫视官方视频"
                },
                {
                    url: "https://www.netflix.com",
                    name: "Netflix",
                    desc: "网飞全球流媒体"
                },
                {
                    url: "https://www.twitch.tv",
                    name: "Twitch",
                    desc: "全球游戏直播平台"
                },
                {
                    url: "https://www.nicovideo.jp",
                    name: "niconico",
                    desc: "日本弹幕视频网站"
                },
                {
                    url: "https://www.spotify.com",
                    name: "Spotify",
                    desc: "全球音乐流媒体"
                }
            ]
        },
        {
            name: "网盘资源",
            icon: "cloud",
            list: [
                {
                    url: "https://pan.baidu.com",
                    name: "百度网盘",
                    desc: "百度云存储服务"
                },
                {
                    url: "https://123pan.com",
                    name: "123网盘",
                    desc: "123云盘服务"
                },
                {
                    url: "https://yun.139.com",
                    name: "中国移动云盘",
                    desc: "移动云存储服务"
                },
                {
                    url: "https://cloud.189.cn",
                    name: "天翼云盘",
                    desc: "电信云存储服务"
                },
                {
                    url: "https://pan.quark.cn",
                    name: "夸克云盘",
                    desc: "夸克云存储服务"
                },
                {
                    url: "https://shared.pika.net.cn/",
                    name: "皮卡资源中心",
                    desc: "皮卡资源分享中心"
                },
                {
                    url: "https://www.aliyundrive.com",
                    name: "阿里云盘",
                    desc: "阿里巴巴云存储"
                },
                {
                    url: "https://www.icloud.com",
                    name: "iCloud",
                    desc: "苹果云存储服务"
                },
                {
                    url: "https://drive.google.com",
                    name: "Google Drive",
                    desc: "谷歌云盘"
                },
                {
                    url: "https://onedrive.live.com",
                    name: "OneDrive",
                    desc: "微软云盘服务"
                },
                {
                    url: "https://www.dropbox.com",
                    name: "Dropbox",
                    desc: "国外经典网盘"
                },
                {
                    url: "https://mega.nz",
                    name: "MEGA",
                    desc: "加密云存储服务"
                }
            ]
        },
        {
            name: "办公效率",
            icon: "briefcase",
            list: [
                {
                    url: "https://docs.qq.com",
                    name: "腾讯文档",
                    desc: "腾讯在线文档"
                },
                {
                    url: "https://feishu.cn",
                    name: "飞书",
                    desc: "字节跳动办公套件"
                },
                {
                    url: "https://github.com",
                    name: "Github",
                    desc: "代码托管平台"
                },
                {
                    url: "https://www.yuque.com",
                    name: "语雀",
                    desc: "阿里知识管理工具"
                },
                {
                    url: "https://www.notion.so",
                    name: "Notion",
                    desc: "一体化笔记与协作"
                },
                {
                    url: "https://www.wps.cn",
                    name: "WPS Office",
                    desc: "金山办公套件"
                },
                {
                    url: "https://www.office.com",
                    name: "Microsoft 365",
                    desc: "微软在线办公"
                },
                {
                    url: "https://workspace.google.com",
                    name: "Google Workspace",
                    desc: "谷歌办公套件"
                },
                {
                    url: "https://trello.com",
                    name: "Trello",
                    desc: "看板式项目管理"
                },
                {
                    url: "https://asana.com",
                    name: "Asana",
                    desc: "团队协作与项目管理"
                },
                {
                    url: "https://calendar.google.com",
                    name: "Google Calendar",
                    desc: "谷歌日历"
                },
                {
                    url: "https://slack.com",
                    name: "Slack",
                    desc: "团队沟通工具"
                }
            ]
        },
        {
            name: "云服务器",
            icon: "server",
            list: [
                {
                    url: "https://cloud.tencent.com",
                    name: "腾讯云",
                    desc: "腾讯云计算服务"
                },
                {
                    url: "https://aliyun.com",
                    name: "阿里云",
                    desc: "阿里云计算服务"
                },
                {
                    url: "https://huaweicloud.com",
                    name: "华为云",
                    desc: "华为云计算服务"
                },
                {
                    url: "https://www.yecaoyun.com/",
                    name: "野草云",
                    desc: "野草云服务器"
                },
                {
                    url: "https://akile.io",
                    name: "Akilo",
                    desc: "Akilo云服务器"
                },
                {
                    url: "https://lxc.wiki",
                    name: "拼垃圾",
                    desc: "LXC容器服务"
                },
                {
                    url: "https://yiandrive.com",
                    name: "亿安云",
                    desc: "亿安云服务"
                },
                {
                    url: "https://bigchick.io/",
                    name: "鸡仔云",
                    desc: "鸡仔云服务"
                },
                {
                    url: "https://cloud.s7123.xyz/login",
                    name: "7123云",
                    desc: "7123云服务"
                },
            ]
        },
        {
            name: "论坛社区",
            icon: "comments",
            list: [
                {
                    url: "https://www.nodeseek.com",
                    name: "NodeSeek",
                    desc: "技术社区论坛"
                },
                {
                    url: "https://linux.do",
                    name: "LinuxDo",
                    desc: "Linux技术社区"
                },
                {
                    url: "https://reddit.com",
                    name: "Reddit",
                    desc: "全球社区论坛"
                },
                {
                    url: "https://v2ex.com",
                    name: "V2EX",
                    desc: "创意工作者社区"
                },
                {
                    url: "https://www.zhihu.com",
                    name: "知乎",
                    desc: "中文问答社区"
                },
                {
                    url: "https://tieba.baidu.com",
                    name: "百度贴吧",
                    desc: "兴趣主题论坛"
                },
                {
                    url: "https://weibo.com",
                    name: "微博",
                    desc: "中文社交平台"
                },
                {
                    url: "https://news.ycombinator.com",
                    name: "Hacker News",
                    desc: "国外高质量技术社区"
                },
                {
                    url: "https://stackoverflow.com",
                    name: "Stack Overflow",
                    desc: "程序员问答社区"
                },
                {
                    url: "https://discord.com",
                    name: "Discord",
                    desc: "国外社区语音平台"
                },
                {
                    url: "https://www.douban.com",
                    name: "豆瓣",
                    desc: "文艺生活社区"
                },
                {
                    url: "https://www.chiphell.com",
                    name: "Chiphell",
                    desc: "硬件玩家社区"
                }
            ]
        },
        {
            name: "AI 智能工具",
            icon: "robot",
            list: [
                {
                    url: "https://chatgpt.com",
                    name: "ChatGPT",
                    desc: "OpenAI 对话助手"
                },
                {
                    url: "https://claude.ai",
                    name: "Claude",
                    desc: "Anthropic 对话助手"
                },
                {
                    url: "https://gemini.google.com",
                    name: "Gemini",
                    desc: "谷歌 AI 助手"
                },
                {
                    url: "https://grok.com",
                    name: "Grok",
                    desc: "xAI 对话助手"
                },
                {
                    url: "https://www.perplexity.ai",
                    name: "Perplexity",
                    desc: "AI 搜索引擎"
                },
                {
                    url: "https://copilot.microsoft.com",
                    name: "Copilot",
                    desc: "微软 AI 助手"
                },
                {
                    url: "https://chat.deepseek.com",
                    name: "DeepSeek",
                    desc: "深度求索对话模型"
                },
                {
                    url: "https://www.doubao.com",
                    name: "豆包",
                    desc: "字节跳动 AI 助手"
                },
                {
                    url: "https://yiyan.baidu.com",
                    name: "文心一言",
                    desc: "百度 AI 对话"
                },
                {
                    url: "https://tongyi.aliyun.com",
                    name: "通义千问",
                    desc: "阿里 AI 助手"
                },
                {
                    url: "https://kimi.moonshot.cn",
                    name: "Kimi",
                    desc: "月之暗面长文本助手"
                },
                {
                    url: "https://www.midjourney.com",
                    name: "Midjourney",
                    desc: "AI 艺术图像生成"
                },
                {
                    url: "https://labs.openai.com",
                    name: "DALL·E",
                    desc: "OpenAI 图像生成"
                },
                {
                    url: "https://runwayml.com",
                    name: "Runway",
                    desc: "AI 视频生成平台"
                },
                {
                    url: "https://suno.com",
                    name: "Suno",
                    desc: "AI 音乐生成平台"
                },
                {
                    url: "https://huggingface.co",
                    name: "Hugging Face",
                    desc: "AI 模型开源社区"
                }
            ]
        },
        {
            name: "开发工具",
            icon: "code",
            list: [
                {
                    url: "https://github.com",
                    name: "GitHub",
                    desc: "全球代码托管平台"
                },
                {
                    url: "https://gitlab.com",
                    name: "GitLab",
                    desc: "一体化 DevOps 平台"
                },
                {
                    url: "https://gitee.com",
                    name: "Gitee",
                    desc: "国内代码托管平台"
                },
                {
                    url: "https://stackoverflow.com",
                    name: "Stack Overflow",
                    desc: "开发者问答社区"
                },
                {
                    url: "https://developer.mozilla.org",
                    name: "MDN Web Docs",
                    desc: "Web 技术权威文档"
                },
                {
                    url: "https://codepen.io",
                    name: "CodePen",
                    desc: "前端在线代码演示"
                },
                {
                    url: "https://codesandbox.io",
                    name: "CodeSandbox",
                    desc: "在线代码编辑器"
                },
                {
                    url: "https://stackblitz.com",
                    name: "StackBlitz",
                    desc: "浏览器中的 IDE"
                },
                {
                    url: "https://regex101.com",
                    name: "Regex101",
                    desc: "正则表达式测试器"
                },
                {
                    url: "https://www.postman.com",
                    name: "Postman",
                    desc: "API 测试与开发"
                },
                {
                    url: "https://hub.docker.com",
                    name: "Docker Hub",
                    desc: "容器镜像仓库"
                },
                {
                    url: "https://www.npmjs.com",
                    name: "npm",
                    desc: "Node.js 包管理器"
                },
                {
                    url: "https://pypi.org",
                    name: "PyPI",
                    desc: "Python 包索引"
                },
                {
                    url: "https://tool.lu",
                    name: "在线工具",
                    desc: "程序员在线工具合集"
                },
                {
                    url: "https://tool.oschina.net",
                    name: "开源中国工具",
                    desc: "开发者常用工具"
                },
                {
                    url: "https://devdocs.io",
                    name: "DevDocs",
                    desc: "各种语言文档聚合"
                }
            ]
        },
        {
            name: "设计创意",
            icon: "palette",
            list: [
                {
                    url: "https://www.figma.com",
                    name: "Figma",
                    desc: "协作式 UI 设计平台"
                },
                {
                    url: "https://www.canva.cn",
                    name: "Canva 可页",
                    desc: "在线平面设计工具"
                },
                {
                    url: "https://www.xiaohongshu.com",
                    name: "小红书",
                    desc: "生活方式分享平台"
                },
                {
                    url: "https://dribbble.com",
                    name: "Dribbble",
                    desc: "设计师作品展示平台"
                },
                {
                    url: "https://www.behance.net",
                    name: "Behance",
                    desc: "Adobe 设计师社区"
                },
                {
                    url: "https://www.pinterest.com",
                    name: "Pinterest",
                    desc: "图片灵感聚合"
                },
                {
                    url: "https://unsplash.com",
                    name: "Unsplash",
                    desc: "免费高清图片素材"
                },
                {
                    url: "https://www.pexels.com",
                    name: "Pexels",
                    desc: "免费图片与视频"
                },
                {
                    url: "https://iconfont.cn",
                    name: "iconfont",
                    desc: "阿里矢量图标库"
                },
                {
                    url: "https://fontawesome.com",
                    name: "Font Awesome",
                    desc: "全球流行图标库"
                },
                {
                    url: "https://www.remove.bg",
                    name: "remove.bg",
                    desc: "一键抖除背景"
                },
                {
                    url: "https://coolors.co",
                    name: "Coolors",
                    desc: "配色方案生成器"
                }
            ]
        },
        {
            name: "学习文档",
            icon: "book",
            list: [
                {
                    url: "https://www.runoob.com",
                    name: "菜鸟教程",
                    desc: "编程语言在线教程"
                },
                {
                    url: "https://www.w3schools.com",
                    name: "W3Schools",
                    desc: "Web 技术教程"
                },
                {
                    url: "https://leetcode.cn",
                    name: "力扣 LeetCode",
                    desc: "算法题库平台"
                },
                {
                    url: "https://www.nowcoder.com",
                    name: "牛客",
                    desc: "IT 类招聘与面经"
                },
                {
                    url: "https://www.bilibili.com/v/knowledge",
                    name: "B 站知识区",
                    desc: "视频学习资源"
                },
                {
                    url: "https://www.coursera.org",
                    name: "Coursera",
                    desc: "全球在线课程平台"
                },
                {
                    url: "https://www.khanacademy.org",
                    name: "Khan Academy",
                    desc: "可汗学院在线教育"
                },
                {
                    url: "https://www.icourse163.org",
                    name: "中国大学MOOC",
                    desc: "国家精品课程"
                },
                {
                    url: "https://www.duolingo.com",
                    name: "Duolingo",
                    desc: "多邓外语学习"
                },
                {
                    url: "https://zh.wikipedia.org",
                    name: "维基百科",
                    desc: "自由的百科全书"
                },
                {
                    url: "https://scholar.google.com",
                    name: "Google Scholar",
                    desc: "学术文献搜索"
                },
                {
                    url: "https://www.zotero.org",
                    name: "Zotero",
                    desc: "文献管理工具"
                }
            ]
        },
        {
            name: "实用工具",
            icon: "wrench",
            list: [
                {
                    url: "https://translate.google.com",
                    name: "谷歌翻译",
                    desc: "多语言在线翻译"
                },
                {
                    url: "https://fanyi.youdao.com",
                    name: "有道翻译",
                    desc: "网易有道词典"
                },
                {
                    url: "https://www.deepl.com",
                    name: "DeepL",
                    desc: "高质量 AI 翻译"
                },
                {
                    url: "https://tinypng.com",
                    name: "TinyPNG",
                    desc: "图片无损压缩"
                },
                {
                    url: "https://www.ilovepdf.com",
                    name: "iLovePDF",
                    desc: "PDF 在线处理套件"
                },
                {
                    url: "https://smallpdf.com",
                    name: "Smallpdf",
                    desc: "PDF 转换与编辑"
                },
                {
                    url: "https://www.speedtest.net",
                    name: "Speedtest",
                    desc: "网络速度测试"
                },
                {
                    url: "https://tools.kalvinbg.cn",
                    name: "在线工具箱",
                    desc: "开发者常用小工具"
                },
                {
                    url: "https://www.json.cn",
                    name: "JSON 解析",
                    desc: "JSON 格式化与校验"
                },
                {
                    url: "https://www.base64encode.org",
                    name: "Base64",
                    desc: "Base64 编解码在线工具"
                },
                {
                    url: "https://archive.org",
                    name: "互联网档案馆",
                    desc: "网页历史快照"
                },
                {
                    url: "https://12306.cn",
                    name: "12306",
                    desc: "中国铁路官方订票"
                },
                {
                    url: "https://www.kuaidi100.com",
                    name: "快递 100",
                    desc: "快递物流查询"
                },
                {
                    url: "https://www.tianqi.com",
                    name: "天气网",
                    desc: "天气预报查询"
                }
            ]
        }
    ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
    const init = {
        headers: {
            'content-type': 'text/html;charset=UTF-8',
        },
    }
    return new Response(renderHTML(renderIndex()), init);
}

addEventListener('fetch', event => {
    return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url) {
    // 首先尝试获取网站的真实favicon
    if (url.match(/https{0,1}:\/\//)) {
        const domain = url.split('//')[1].split('/')[0];
        
        // 使用高质量的favicon服务，按优先级排序
        const faviconServices = [
            // `https://favicon.yandex.net/favicon/${domain}`,              // Yandex服务
            // `https://icons.duckduckgo.com/ip3/${domain}.ico`,            // DuckDuckGo服务
            `https://icon.horse/icon/${domain}`,                         // IconHorse服务
            `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,  // Google服务，128px高质量
            // `https://besticon.herokuapp.com/icon?size=128..256..512&url=${domain}` // BestIcon服务
        ];
        
        // 返回第一个favicon服务URL
        return faviconServices[0];
    } else {
        // 如果不是标准URL格式，使用默认图标生成服务
        const cleanName = url.replace(/[^a-zA-Z0-9]/g, '').substring(0, 2).toUpperCase();
        return "https://ui-avatars.com/api/?bold=true&size=128&background=0D8ABC&color=fff&rounded=true&name=" + cleanName;
    }
}

/** Render Functions
 *  渲染模块函数
 */
function renderThemeSwitcher() {
    const items = config.themes.map(t =>
        el('button',
            ['type="button"',
             `class="theme-chip"`,
             `data-theme="${t.key}"`,
             `data-kind="${t.kind}"`,
             `data-pc="${t.pc || ''}"`,
             `data-mobile="${t.mobile || ''}"`,
             `title="${t.name}"`,
             `aria-label="${t.name}"`],
            el('i', [`class="fa-solid fa-${t.icon}"`], "") + el('span', ['class="theme-chip-label"'], t.name)
        )
    ).join("");

    return el('div', ['class="theme-switcher"', 'role="toolbar"', 'aria-label="\u4e3b\u9898\u5207\u6362"'],
        el('button', ['type="button"', 'class="theme-toggle"', 'id="themeToggle"', 'aria-label="\u5c55\u5f00\u4e3b\u9898"', 'title="\u4e3b\u9898"'],
            el('i', ['class="fa-solid fa-palette"'], "")
        ) +
        el('div', ['class="theme-panel"', 'id="themePanel"'],
            el('div', ['class="theme-panel-title"'], '\u4e3b\u9898 / Theme') +
            el('div', ['class="theme-chip-group"'], items)
        )
    );
}

function renderIndex() {
    const footer = el('footer', ['class="modern-footer"'],
        el('div', ['class="footer-content"'],
            el('p', ['class="footer-text"'],
                'Powered by ' +
                el('a', ['class="footer-link"', 'href="https://github.com/PIKACHUIM/WebIndex"', 'target="_blank"', 'rel="noopener noreferrer"'], 'PikaTools') +
                ' | © MIT License'
            )
        )
    );
    return renderThemeSwitcher() +
        el('div', ['class="wallpaper-layer"', 'id="wallpaperLayer"', 'aria-hidden="true"'], "") +
        el('div', ['class="wallpaper-mask"', 'aria-hidden="true"'], "") +
        renderHeader() + renderMain() + footer;
}

function renderHeader() {
    const item = (template, name) => el('a', ['class="search-engine-item"', `data-url="${template}"`], name);

    var title = el('div', ['class="header-content"'],
        el('div', ['class="logo-container"'],
            el('i', [`class="fa-solid fa-${config.logo_icon}"`], "") +
            el('span', ['class="logo-label"'], 'PikaTools')
        ) +
        el('div', ['class="title-text"'],
            el('h1', ['class="main-title"'], config.title) +
            el('p', ['class="subtitle"'], config.subtitle)
        )
    );

    var searchContainer = el('div', ['class="search-container"'],
        el('div', ['class="search-box"'],
            el('div', ['class="search-input-wrapper"'],
                el('input', ['id="searchinput"', 'type="search"', 'placeholder="搜索工具和资源..."', 'autocomplete="off"', 'class="search-input"'], ""),
                el('button', ['class="search-button"', 'type="button"', 'aria-label="搜索"'], el('i', ['class="fa-solid fa-magnifying-glass"'], ""))
            ) +
            el('div', ['class="search-engine-tabs"'],
                config.search_engine.map((link, key) => {
                    if (key == 0) {
                        return el('a', ['class="search-engine-item active"', `data-url="${link.template}"`], link.name);
                    } else {
                        return item(link.template, link.name);
                    }
                }).join("")
            )
        )
    );

    return el('header', ['class="modern-header"'], el('div', ['class="header-container"'], title + (config.search ? searchContainer : "")))
}

function renderMain() {
    var main = config.lists.map((item) => {
        const card = (url, name, desc) => el('a', ['class="website-card"', `href=${url}`, 'target="_blank"', 'rel="noopener noreferrer"'],
            el('div', ['class="card-content"'],
                el('div', ['class="card-icon"'], el('img', ['class="favicon"', `src=${getFavicon(url)}`, 'alt=""'], "")) +
                el('div', ['class="card-info"'],
                    el('h3', ['class="card-title"'], name) +
                    el('p', ['class="card-description"'], desc)
                )
            )
        );

        const section = el('section', ['class="website-section"'],
            el('div', ['class="section-header"'],
                el('i', [`class="fa-solid fa-${item.icon}"`], "") +
                el('h2', ['class="section-title"'], item.name)
            ) +
            el('div', ['class="website-grid"'],
                item.list.map((link) => {
                    return card(link.url, link.name, link.desc);
                }).join("")
            )
        );

        return section;
    }).join("");

    return el('main', ['class="main-content"'], el('div', ['class="container"'], main));
}

function renderHTML(index) {
    return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${config.title} - ${config.subtitle}</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Nunito:wght@400;600;700;800&family=Zen+Maru+Gothic:wght@500;700;900&display=swap');

        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* ==========================================================
           主题变量系统
           默认 = dark；其他主题通过 html[data-theme="..."] 覆盖
           ========================================================== */
        :root,
        html[data-theme="dark"] {
            --bg-base: #0b1020;
            --bg-elev: rgba(22, 29, 63, 0.55);
            --bg-card: rgba(255, 255, 255, 0.06);
            --bg-card-hover: rgba(255, 255, 255, 0.10);
            --border-soft: rgba(148, 163, 210, 0.16);
            --border-strong: rgba(148, 163, 210, 0.32);
            --text-primary: #eef1ff;
            --text-secondary: #a8b0d3;
            --text-muted: #7b84a8;
            --accent: #7cf1c9;
            --accent-contrast: #0b1020;
            --accent-soft: rgba(124, 241, 201, 0.18);
            --accent-glow: rgba(124, 241, 201, 0.45);
            --warm: #f5b36b;
            --warm-soft: rgba(245, 179, 107, 0.18);
            --shadow-md: 0 10px 30px -10px rgba(0, 0, 0, 0.55);
            --shadow-lg: 0 25px 60px -20px rgba(0, 0, 0, 0.7);
            --ambient: radial-gradient(900px circle at 15% 10%, rgba(124, 241, 201, 0.14), transparent 60%),
                       radial-gradient(700px circle at 85% 90%, rgba(245, 179, 107, 0.10), transparent 60%),
                       radial-gradient(600px circle at 50% 50%, rgba(99, 102, 241, 0.08), transparent 70%);
            --wallpaper-image: none;
            --wallpaper-opacity: 0;
            --wallpaper-blur: 0px;
            --mask-color: rgba(11, 16, 32, 0.35);
        }

        html[data-theme="light"] {
            --bg-base: #f6f7fb;
            --bg-elev: rgba(255, 255, 255, 0.7);
            --bg-card: rgba(255, 255, 255, 0.75);
            --bg-card-hover: rgba(255, 255, 255, 0.95);
            --border-soft: rgba(15, 23, 42, 0.08);
            --border-strong: rgba(15, 23, 42, 0.16);
            --text-primary: #1e2340;
            --text-secondary: #5b6180;
            --text-muted: #8a91b0;
            --accent: #ff6b8b;
            --accent-contrast: #ffffff;
            --accent-soft: rgba(255, 107, 139, 0.14);
            --accent-glow: rgba(255, 107, 139, 0.35);
            --warm: #ffb347;
            --warm-soft: rgba(255, 179, 71, 0.18);
            --shadow-md: 0 10px 30px -12px rgba(100, 116, 139, 0.25);
            --shadow-lg: 0 25px 60px -20px rgba(100, 116, 139, 0.35);
            --ambient: radial-gradient(900px circle at 12% 8%, rgba(255, 182, 193, 0.45), transparent 60%),
                       radial-gradient(800px circle at 88% 92%, rgba(189, 224, 254, 0.55), transparent 60%),
                       radial-gradient(700px circle at 50% 50%, rgba(255, 223, 186, 0.35), transparent 70%);
            --wallpaper-image: none;
            --wallpaper-opacity: 0;
            --wallpaper-blur: 0px;
            --mask-color: rgba(246, 247, 251, 0.35);
        }

        /* 三月七：粉蓝、冰雪少女 */
        html[data-theme="march7"] {
            --bg-base: #0f1430;
            --bg-elev: rgba(26, 31, 73, 0.55);
            --bg-card: rgba(255, 255, 255, 0.10);
            --bg-card-hover: rgba(255, 255, 255, 0.16);
            --border-soft: rgba(255, 182, 213, 0.22);
            --border-strong: rgba(255, 182, 213, 0.45);
            --text-primary: #ffffff;
            --text-secondary: #d9ddf5;
            --text-muted: #a7adce;
            --accent: #ff9ec7;
            --accent-contrast: #2b0f24;
            --accent-soft: rgba(255, 158, 199, 0.22);
            --accent-glow: rgba(255, 158, 199, 0.55);
            --warm: #8ad5ff;
            --warm-soft: rgba(138, 213, 255, 0.22);
            --shadow-md: 0 10px 30px -10px rgba(0, 0, 0, 0.55);
            --shadow-lg: 0 25px 60px -20px rgba(255, 158, 199, 0.35);
            --ambient: radial-gradient(900px circle at 15% 10%, rgba(255, 158, 199, 0.28), transparent 60%),
                       radial-gradient(800px circle at 85% 90%, rgba(138, 213, 255, 0.28), transparent 60%),
                       radial-gradient(600px circle at 50% 50%, rgba(180, 120, 255, 0.15), transparent 70%);
            --wallpaper-opacity: 0.55;
            --wallpaper-blur: 2px;
            --mask-color: rgba(15, 20, 48, 0.55);
        }

        /* Gawr Gura：深海蓝 */
        html[data-theme="gura"] {
            --bg-base: #041a2e;
            --bg-elev: rgba(6, 38, 66, 0.55);
            --bg-card: rgba(150, 220, 255, 0.08);
            --bg-card-hover: rgba(150, 220, 255, 0.14);
            --border-soft: rgba(150, 220, 255, 0.22);
            --border-strong: rgba(150, 220, 255, 0.45);
            --text-primary: #f0faff;
            --text-secondary: #b9d9ea;
            --text-muted: #7ea2b8;
            --accent: #5fe0ff;
            --accent-contrast: #001622;
            --accent-soft: rgba(95, 224, 255, 0.20);
            --accent-glow: rgba(95, 224, 255, 0.55);
            --warm: #ff8fb1;
            --warm-soft: rgba(255, 143, 177, 0.22);
            --shadow-md: 0 10px 30px -10px rgba(0, 0, 0, 0.6);
            --shadow-lg: 0 25px 60px -20px rgba(0, 120, 180, 0.45);
            --ambient: radial-gradient(1000px circle at 20% 20%, rgba(95, 224, 255, 0.22), transparent 60%),
                       radial-gradient(900px circle at 80% 80%, rgba(100, 150, 255, 0.20), transparent 60%),
                       radial-gradient(600px circle at 50% 50%, rgba(255, 143, 177, 0.10), transparent 70%);
            --wallpaper-opacity: 0.5;
            --wallpaper-blur: 3px;
            --mask-color: rgba(4, 26, 46, 0.60);
        }

        /* 小埋：橙黄温暖 */
        html[data-theme="umaru"] {
            --bg-base: #fff6ea;
            --bg-elev: rgba(255, 237, 213, 0.7);
            --bg-card: rgba(255, 255, 255, 0.72);
            --bg-card-hover: rgba(255, 255, 255, 0.92);
            --border-soft: rgba(255, 159, 64, 0.18);
            --border-strong: rgba(255, 159, 64, 0.38);
            --text-primary: #5a3a1b;
            --text-secondary: #8a6138;
            --text-muted: #b69270;
            --accent: #ff8c3a;
            --accent-contrast: #ffffff;
            --accent-soft: rgba(255, 140, 58, 0.18);
            --accent-glow: rgba(255, 140, 58, 0.45);
            --warm: #ffd166;
            --warm-soft: rgba(255, 209, 102, 0.25);
            --shadow-md: 0 10px 30px -12px rgba(180, 110, 40, 0.28);
            --shadow-lg: 0 25px 60px -20px rgba(180, 110, 40, 0.4);
            --ambient: radial-gradient(900px circle at 15% 10%, rgba(255, 209, 102, 0.55), transparent 60%),
                       radial-gradient(800px circle at 85% 90%, rgba(255, 179, 102, 0.5), transparent 60%),
                       radial-gradient(600px circle at 50% 50%, rgba(255, 235, 200, 0.55), transparent 70%);
            --wallpaper-opacity: 0.35;
            --wallpaper-blur: 4px;
            --mask-color: rgba(255, 246, 234, 0.55);
        }

        /* 皮卡丘：黄红电气 */
        html[data-theme="pikachu"] {
            --bg-base: #fff8d9;
            --bg-elev: rgba(255, 244, 200, 0.7);
            --bg-card: rgba(255, 255, 255, 0.80);
            --bg-card-hover: rgba(255, 255, 255, 0.95);
            --border-soft: rgba(231, 76, 60, 0.14);
            --border-strong: rgba(231, 76, 60, 0.32);
            --text-primary: #3b2a05;
            --text-secondary: #6b5014;
            --text-muted: #a88839;
            --accent: #ef3e36;
            --accent-contrast: #fff;
            --accent-soft: rgba(239, 62, 54, 0.14);
            --accent-glow: rgba(239, 62, 54, 0.40);
            --warm: #f7c948;
            --warm-soft: rgba(247, 201, 72, 0.30);
            --shadow-md: 0 10px 30px -12px rgba(180, 110, 40, 0.25);
            --shadow-lg: 0 25px 60px -20px rgba(231, 76, 54, 0.35);
            --ambient: radial-gradient(900px circle at 15% 10%, rgba(247, 201, 72, 0.70), transparent 60%),
                       radial-gradient(800px circle at 85% 90%, rgba(255, 235, 120, 0.65), transparent 60%),
                       radial-gradient(600px circle at 50% 50%, rgba(255, 180, 60, 0.25), transparent 70%);
            --wallpaper-opacity: 0.40;
            --wallpaper-blur: 3px;
            --mask-color: rgba(255, 248, 217, 0.55);
        }

        /* ===== 通用 ===== */
        :root {
            --radius-xl: 22px;
            --radius-lg: 18px;
            --radius-md: 14px;
            --radius-sm: 10px;
            --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
            --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'DM Sans', 'Nunito', 'PingFang SC', 'Microsoft YaHei', sans-serif;
            background: var(--bg-base);
            color: var(--text-primary);
            min-height: 100vh;
            line-height: 1.6;
            position: relative;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transition: background 0.6s var(--ease-out), color 0.4s var(--ease-out);
        }

        /* 氛围光晕层（每个主题配色不同） */
        body::before {
            content: '';
            position: fixed;
            inset: 0;
            background: var(--ambient);
            pointer-events: none;
            z-index: 1;
            transition: background 0.6s var(--ease-out);
        }
        body::after { content: none; }

        /* 壁纸层 */
        .wallpaper-layer {
            position: fixed;
            inset: 0;
            background-image: var(--wallpaper-image);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: var(--wallpaper-opacity, 0);
            filter: blur(var(--wallpaper-blur, 0));
            pointer-events: none;
            z-index: 0;
            transition: opacity 0.8s var(--ease-out), filter 0.6s var(--ease-out), background-image 0.6s ease;
        }
        .wallpaper-mask {
            position: fixed;
            inset: 0;
            background: var(--mask-color);
            pointer-events: none;
            z-index: 1;
            transition: background 0.6s var(--ease-out);
        }

        /* ===== 主题切换器 ===== */
        .theme-switcher {
            position: fixed;
            top: 1.25rem;
            right: 1.25rem;
            z-index: 100;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.6rem;
        }

        .theme-toggle {
            width: 44px;
            height: 44px;
            border: 1px solid var(--border-soft);
            border-radius: 50%;
            background: var(--bg-card);
            color: var(--text-primary);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(18px) saturate(180%);
            -webkit-backdrop-filter: blur(18px) saturate(180%);
            box-shadow: var(--shadow-md);
            transition: transform 0.25s var(--ease-spring), background 0.25s var(--ease-out);
        }

        .theme-toggle:hover {
            transform: rotate(30deg) scale(1.05);
            background: var(--bg-card-hover);
        }

        .theme-toggle i {
            font-size: 1.05rem !important;
            color: var(--accent) !important;
        }

        .theme-panel {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.85rem;
            background: var(--bg-card);
            border: 1px solid var(--border-soft);
            border-radius: var(--radius-lg);
            backdrop-filter: blur(22px) saturate(180%);
            -webkit-backdrop-filter: blur(22px) saturate(180%);
            box-shadow: var(--shadow-lg);
            min-width: 200px;
            transform-origin: top right;
            transform: translateY(-8px) scale(0.95);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s var(--ease-spring);
        }

        .theme-panel.open {
            transform: translateY(0) scale(1);
            opacity: 1;
            pointer-events: auto;
        }

        .theme-panel-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 0.72rem;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-muted);
            padding: 0.25rem 0.4rem 0.1rem;
        }

        .theme-chip-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.35rem;
        }

        .theme-chip {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            padding: 0.5rem 0.7rem;
            border-radius: var(--radius-sm);
            border: 1px solid transparent;
            background: transparent;
            color: var(--text-secondary);
            font-family: inherit;
            font-size: 0.78rem;
            font-weight: 500;
            cursor: pointer;
            text-align: left;
            transition: all 0.25s var(--ease-out);
        }

        .theme-chip:hover {
            background: var(--accent-soft);
            color: var(--text-primary);
            transform: translateY(-1px);
        }

        .theme-chip.active {
            background: var(--accent-soft);
            color: var(--accent);
            border-color: var(--accent);
        }

        .theme-chip i {
            font-size: 0.85rem !important;
            width: 16px;
            text-align: center;
        }

        .theme-chip-label {
            flex: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* ===== Header ===== */
        .modern-header {
            position: relative;
            z-index: 5;
            padding: 5rem 0 3rem;
            text-align: center;
        }

        .header-container {
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .header-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 3rem;
        }

        .logo-container {
            display: inline-flex;
            align-items: center;
            gap: 0.7rem;
            padding: 0.5rem 1.1rem 0.5rem 0.7rem;
            margin-bottom: 1.75rem;
            background: var(--bg-card);
            border: 1px solid var(--border-soft);
            border-radius: 999px;
            backdrop-filter: blur(18px) saturate(180%);
            -webkit-backdrop-filter: blur(18px) saturate(180%);
            box-shadow: var(--shadow-md);
            transition: all 0.3s var(--ease-out);
        }

        .logo-container:hover {
            border-color: var(--accent);
            transform: translateY(-2px);
        }

        .logo-container > i {
            font-size: 1rem !important;
            color: var(--warm) !important;
            filter: drop-shadow(0 0 8px var(--warm-soft));
        }

        .logo-label {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--text-secondary);
        }

        .title-text {
            text-align: center;
            max-width: 760px;
        }

        .main-title {
            font-family: 'Space Grotesk', 'Zen Maru Gothic', sans-serif;
            font-size: clamp(2.4rem, 5.5vw, 3.8rem);
            font-weight: 700;
            letter-spacing: -0.03em;
            line-height: 1.05;
            margin: 0 0 0.75rem;
            background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
        }

        .subtitle {
            font-size: 1.05rem;
            color: var(--text-secondary);
            font-weight: 400;
            max-width: 560px;
            margin: 0 auto;
        }

        /* ===== 搜索 ===== */
        .search-container {
            max-width: 680px;
            margin: 0 auto;
        }

        .search-box {
            background: transparent;
        }

        .search-input-wrapper {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: var(--bg-card);
            border: 1px solid var(--border-strong);
            border-radius: 999px;
            padding: 0.45rem 0.55rem 0.45rem 1.5rem;
            transition: all 0.3s var(--ease-out);
            box-shadow: var(--shadow-md);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
        }

        .search-input-wrapper:focus-within {
            border-color: var(--accent);
            box-shadow: 0 0 0 4px var(--accent-soft), var(--shadow-lg);
            background: var(--bg-card-hover);
            transform: translateY(-2px);
        }

        .search-input {
            flex: 1;
            border: none;
            outline: none;
            background: transparent;
            color: var(--text-primary);
            font-family: inherit;
            font-size: 1rem;
            font-weight: 500;
            padding: 0.8rem 0;
        }

        .search-input::placeholder { color: var(--text-muted); font-weight: 400; }

        .search-input::-webkit-search-decoration,
        .search-input::-webkit-search-cancel-button {
            -webkit-appearance: none;
        }

        .search-button {
            flex-shrink: 0;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(135deg, var(--accent), var(--warm));
            color: var(--accent-contrast);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 0.95rem;
            box-shadow: 0 6px 16px -4px var(--accent-glow);
            transition: transform 0.25s var(--ease-spring), box-shadow 0.25s var(--ease-out);
        }

        .search-button:hover {
            transform: scale(1.08) rotate(-6deg);
            box-shadow: 0 10px 22px -4px var(--accent-glow);
        }

        .search-button:active { transform: scale(0.94); }
        .search-button i { font-size: 0.95rem !important; }

        .search-engine-tabs {
            display: flex;
            justify-content: center;
            gap: 0.45rem;
            margin-top: 1.25rem;
            flex-wrap: wrap;
        }

        .search-engine-item {
            padding: 0.4rem 1rem;
            border-radius: 999px;
            text-decoration: none;
            color: var(--text-secondary);
            background: var(--bg-card);
            border: 1px solid var(--border-soft);
            font-size: 0.82rem;
            font-weight: 500;
            cursor: pointer;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            transition: all 0.25s var(--ease-out);
        }

        .search-engine-item:hover {
            color: var(--text-primary);
            background: var(--bg-card-hover);
            transform: translateY(-1px);
        }

        .search-engine-item.active {
            color: var(--accent-contrast);
            background: linear-gradient(135deg, var(--accent), var(--warm));
            border-color: transparent;
            box-shadow: 0 4px 12px -2px var(--accent-glow);
        }

        /* ===== 主体内容 ===== */
        .main-content {
            position: relative;
            z-index: 5;
            padding: 2.5rem 0 5rem;
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .website-section {
            margin-bottom: 3.5rem;
        }

        .section-header {
            display: flex;
            align-items: center;
            gap: 0.85rem;
            margin-bottom: 1.5rem;
            padding: 0.25rem 0 1rem;
            border-bottom: 1px solid var(--border-soft);
        }

        .section-header > i {
            font-size: 1.05rem !important;
            color: var(--accent-contrast) !important;
            width: 36px;
            height: 36px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, var(--accent), var(--warm));
            border-radius: 12px;
            box-shadow: 0 6px 16px -6px var(--accent-glow);
        }

        .section-title {
            font-family: 'Space Grotesk', 'Zen Maru Gothic', sans-serif;
            font-size: 1.35rem;
            font-weight: 700;
            color: var(--text-primary);
            letter-spacing: -0.01em;
            margin: 0;
        }

        .website-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 0.95rem;
        }

        .website-card {
            position: relative;
            display: block;
            padding: 1.05rem 1.15rem;
            background: var(--bg-card);
            border: 1px solid var(--border-soft);
            border-radius: var(--radius-lg);
            text-decoration: none;
            color: inherit;
            overflow: hidden;
            backdrop-filter: blur(14px) saturate(180%);
            -webkit-backdrop-filter: blur(14px) saturate(180%);
            box-shadow: var(--shadow-md);
            transition: transform 0.35s var(--ease-out),
                        border-color 0.35s var(--ease-out),
                        background 0.35s var(--ease-out),
                        box-shadow 0.35s var(--ease-out);
            opacity: 0;
            animation: cardIn 0.6s var(--ease-out) forwards;
        }

        .website-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(480px circle at var(--mx, 50%) var(--my, 50%), var(--accent-soft), transparent 40%);
            opacity: 0;
            transition: opacity 0.3s var(--ease-out);
            pointer-events: none;
        }

        .website-card:hover {
            transform: translateY(-4px);
            border-color: var(--border-strong);
            background: var(--bg-card-hover);
            box-shadow: var(--shadow-lg);
        }

        .website-card:hover::before { opacity: 1; }

        .card-content {
            position: relative;
            display: flex;
            align-items: center;
            gap: 0.95rem;
            z-index: 1;
        }

        .card-icon { flex-shrink: 0; }

        .favicon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            background: var(--bg-card);
            object-fit: cover;
            padding: 5px;
            border: 1px solid var(--border-soft);
            transition: transform 0.4s var(--ease-spring);
        }

        .website-card:hover .favicon {
            transform: scale(1.1) rotate(-4deg);
        }

        .card-info { flex: 1; min-width: 0; }

        .card-title {
            font-family: 'Space Grotesk', 'Zen Maru Gothic', sans-serif;
            font-size: 0.98rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 0.18rem;
            letter-spacing: -0.01em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: color 0.25s var(--ease-out);
        }

        .website-card:hover .card-title { color: var(--accent); }

        .card-description {
            font-size: 0.8rem;
            color: var(--text-muted);
            line-height: 1.45;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        /* ===== Footer ===== */
        .modern-footer {
            position: relative;
            z-index: 5;
            padding: 2.5rem 0;
            text-align: center;
            border-top: 1px solid var(--border-soft);
        }

        .footer-content {
            max-width: 1180px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .footer-text {
            color: var(--text-muted);
            font-size: 0.88rem;
        }

        .footer-link {
            color: var(--text-secondary);
            text-decoration: none;
            font-weight: 600;
            border-bottom: 1px solid transparent;
            transition: all 0.2s var(--ease-out);
        }

        .footer-link:hover {
            color: var(--accent);
            border-bottom-color: var(--accent);
        }

        /* ===== 动画 ===== */
        @keyframes cardIn {
            from { opacity: 0; transform: translateY(14px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes shakeX {
            0%, 100% { transform: translateX(0); }
            25%      { transform: translateX(-5px); }
            75%      { transform: translateX(5px); }
        }
        .shake { animation: shakeX 0.35s ease; }

        .website-section:nth-child(1) .website-card { animation-delay: 0.05s; }
        .website-section:nth-child(2) .website-card { animation-delay: 0.10s; }
        .website-section:nth-child(3) .website-card { animation-delay: 0.15s; }
        .website-section:nth-child(4) .website-card { animation-delay: 0.20s; }
        .website-section:nth-child(5) .website-card { animation-delay: 0.25s; }
        .website-section:nth-child(6) .website-card { animation-delay: 0.30s; }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        }

        /* ===== 滚动条 ===== */
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb {
            background: var(--border-strong);
            border-radius: 10px;
            border: 2px solid transparent;
            background-clip: content-box;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: var(--accent);
            background-clip: content-box;
        }

        /* ===== 响应式 ===== */
        @media (max-width: 768px) {
            .modern-header { padding: 4rem 0 2rem; }
            .header-container,
            .container,
            .footer-content { padding: 0 1.1rem; }
            .website-grid {
                grid-template-columns: 1fr 1fr;
                gap: 0.7rem;
            }
            .section-title { font-size: 1.15rem; }
            .search-input-wrapper { padding-left: 1.15rem; }
            .search-input { font-size: 0.95rem; }
            .theme-switcher { top: 0.75rem; right: 0.75rem; }
            .theme-panel { min-width: 180px; }
            .theme-chip-group { grid-template-columns: 1fr; }
            .main-title { font-size: 2.2rem; }
        }

        @media (max-width: 480px) {
            .website-grid { grid-template-columns: 1fr; }
            .main-title { font-size: 1.9rem; }
            .subtitle { font-size: 0.92rem; }
            .search-engine-item { font-size: 0.78rem; padding: 0.35rem 0.8rem; }
            .card-title { font-size: 0.92rem; }
            .favicon { width: 38px; height: 38px; }
        }
    </style>
  </head>
  <body>
    ${index}
    <script>
      (function () {
        'use strict';

        /* ==================== 主题系统 ==================== */
        const THEME_KEY = 'pikatools.theme';
        const DEFAULT_THEME = 'dark';

        const root = document.documentElement;
        const themeToggle = document.getElementById('themeToggle');
        const themePanel = document.getElementById('themePanel');
        const themeChips = document.querySelectorAll('.theme-chip');
        const wallpaperLayer = document.getElementById('wallpaperLayer');

        function isMobileViewport() {
          return window.matchMedia('(max-width: 768px)').matches;
        }

        function setWallpaper(pcUrl, mobileUrl) {
          if (!wallpaperLayer) return;
          const url = (isMobileViewport() && mobileUrl) ? mobileUrl : (pcUrl || '');
          if (!url) {
            wallpaperLayer.style.backgroundImage = 'none';
            return;
          }
          const probe = new Image();
          probe.onload = function () {
            wallpaperLayer.style.backgroundImage = 'url("' + url + '")';
          };
          probe.onerror = function () {
            // 图片加载失败时保持纯渐变（不设置背景图）
            wallpaperLayer.style.backgroundImage = 'none';
          };
          probe.src = url;
        }

        function applyTheme(key) {
          const chip = document.querySelector('.theme-chip[data-theme="' + key + '"]');
          if (!chip) return false;

          root.setAttribute('data-theme', key);

          themeChips.forEach(c => c.classList.toggle('active', c === chip));

          const kind = chip.getAttribute('data-kind');
          if (kind === 'anime') {
            setWallpaper(chip.getAttribute('data-pc'), chip.getAttribute('data-mobile'));
          } else {
            setWallpaper('', '');
          }

          try { localStorage.setItem(THEME_KEY, key); } catch (_) {}
          return true;
        }

        // 初始化：从 localStorage 或系统偏好
        (function initTheme() {
          let saved = null;
          try { saved = localStorage.getItem(THEME_KEY); } catch (_) {}
          if (saved && applyTheme(saved)) return;
          const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
          applyTheme(prefersLight ? 'light' : DEFAULT_THEME);
        })();

        // 主题面板开关
        if (themeToggle && themePanel) {
          themeToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            themePanel.classList.toggle('open');
          });
          document.addEventListener('click', function (e) {
            if (!themePanel.contains(e.target) && e.target !== themeToggle) {
              themePanel.classList.remove('open');
            }
          });
          document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') themePanel.classList.remove('open');
          });
        }

        // 主题 chip 点击
        themeChips.forEach(chip => {
          chip.addEventListener('click', function () {
            applyTheme(this.getAttribute('data-theme'));
          });
        });

        // 视口变化时若为二次元主题重新选择 PC/移动版壁纸
        let resizeTimer = null;
        window.addEventListener('resize', function () {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function () {
            const active = document.querySelector('.theme-chip.active');
            if (active && active.getAttribute('data-kind') === 'anime') {
              setWallpaper(active.getAttribute('data-pc'), active.getAttribute('data-mobile'));
            }
          }, 180);
        });

        /* ==================== 搜索 ==================== */
        const searchInput = document.getElementById('searchinput');
        const searchButton = document.querySelector('.search-button');
        const engineItems = document.querySelectorAll('.search-engine-item');

        function getActiveEngineUrl() {
          const active = document.querySelector('.search-engine-item.active') || engineItems[0];
          return active ? active.getAttribute('data-url') : '';
        }

        function doSearch() {
          if (!searchInput) return;
          const query = (searchInput.value || '').trim();
          if (!query) {
            searchInput.focus();
            searchInput.classList.add('shake');
            setTimeout(() => searchInput.classList.remove('shake'), 400);
            return;
          }
          const tpl = getActiveEngineUrl();
          if (!tpl) return;
          const url = tpl.replace('$s', encodeURIComponent(query));
          window.open(url, '_blank', 'noopener');
        }

        engineItems.forEach(item => {
          item.addEventListener('click', function (e) {
            e.preventDefault();
            engineItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            if (searchInput) searchInput.focus();
          });
        });

        if (searchButton) {
          searchButton.addEventListener('click', function (e) {
            e.preventDefault();
            doSearch();
          });
        }

        if (searchInput) {
          let composing = false;
          searchInput.addEventListener('compositionstart', () => { composing = true; });
          searchInput.addEventListener('compositionend',   () => { composing = false; });
          searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !composing && !e.isComposing) {
              e.preventDefault();
              doSearch();
            }
          });
          document.addEventListener('keydown', function (e) {
            if (e.key === '/' && document.activeElement !== searchInput) {
              const tag = (document.activeElement && document.activeElement.tagName) || '';
              if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
                e.preventDefault();
                searchInput.focus();
              }
            }
          });
        }

        /* ==================== 卡片光标跟随 ==================== */
        document.querySelectorAll('.website-card').forEach(card => {
          card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            this.style.setProperty('--mx', x + '%');
            this.style.setProperty('--my', y + '%');
          });
        });

        /* ==================== Favicon 降级 ==================== */
        document.querySelectorAll('.favicon').forEach(img => {
          img.addEventListener('error', function () {
            const src = this.src;
            if (src.includes('icon.horse')) {
              const domain = src.split('/').pop();
              this.src = 'https://www.google.com/s2/favicons?domain=' + domain + '&sz=128';
            } else if (src.includes('google.com/s2/favicons')) {
              const m = src.match(/domain=([^&]+)/);
              const domain = m ? m[1] : '';
              this.src = 'https://icons.duckduckgo.com/ip3/' + domain + '.ico';
            } else {
              const alt = this.getAttribute('alt') || '?';
              const letter = encodeURIComponent((alt || '?').substring(0, 2));
              this.src = 'https://ui-avatars.com/api/?bold=true&size=128&background=random&color=fff&rounded=true&name=' + letter;
            }
          });
        });

        /* ==================== 锚点平滑滚动 ==================== */
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
        });
      })();
    </script>
  </body>
</html>`
}