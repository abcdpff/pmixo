import React, { Component } from 'react';
import { Icon, Popover } from 'antd';
import '../assets/css/footer.scss';

const Scroll = function (target = 290, duration = 300) {
  if (window.__scrollMove) return;
  const begin = document.documentElement.scrollTop || document.body.scrollTop;
  const change = target - begin;
  const start = Date.now();
  (function fn() {
    window.__scrollMove = window.requestAnimationFrame(fn);
    var nowTime = Date.now() - start;
    if (nowTime >= duration) {
      nowTime = duration;
      window.cancelAnimationFrame(window.__scrollMove);
      window.__scrollMove = null;
    }
    setScrollTop(change / duration * nowTime + begin);
  })();
  function setScrollTop(t) {
    return document.documentElement.scrollTop = document.body.scrollTop = t;
  }
};

export default class Footer extends Component {
  handleClick() {
    Scroll(20, 300);
  }
  render() {
    const contact = [
      {
        "form": "wechat",
        "way": <div><img style={{ width: 100, height: 100 }} alt='' /></div>
      },
      {
        "form": "weibo-circle",
        "way": <div><img style={{ width: 100, height: 100 }} alt='' /></div>
      },
      {
        "form": "github",
        "way": <div><img style={{ width: 100, height: 100 }} alt='' /></div>
      },
    ]
    let content = contact.map(function (item, index) {
      return (
        <Popover content={item.way} key={index}>
          <Icon type={item.form} style={{ fontSize: 20 }} />
        </Popover>
      )
    })

    return (
      <div className="footer">
        <div className="bottom">
          <div className="icon">
            {content}
          </div>
          <div className="copyright">
            <p>COPYRIGHT © PMIXO 2021.</p>
            <p>ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    )
  }
}