import React from 'react'
import './footer.css'
class Footer extends React.Component {
  render () {
    return(
      <div className='footer'>
        <div className='footer-main'>
          <div className='links'>
            <a href="javascript:void(0)" className='dark'>RSS</a> |
            <a href="https://github.com/cnodejs/nodeclub/" className='dark'> 源码地址</a>
          </div>
          <div className='col-fade'>
            <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
            <p>
              服务器赞助商为
              <a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo">
                <img src="//dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="2"/>
              </a>
               ，存储赞助商为
              <a href="http://www.qiniu.com/?ref=cnode">
                <img src="//dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt="7"/>
              </a>
              　，由
              <a href="https://alinode.aliyun.com/?ref=cnode">
                <img src="//dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD" alt="8"/>
              </a>
              提供应用性能服务。
            </p>
            <p>
              新手搭建 Node.js 服务器，推荐使用无需备案的
              <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">
                DigitalOcean(https://www.digitalocean.com/)
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
