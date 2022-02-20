import React, { Component } from 'react';
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
    return (
      <div className="footer">
        <div className="bottom">
          <div className="copyright">
            <p>Copyright © 2021 PMIXO All Rights Reserved.</p>
          </div>
          <div className="copyright">
            <p>
              <span>山东普罗米智能家居有限公司</span>
              <span>普罗米公司 版权所有</span>
              <span><a href="https://beian.miit.gov.cn/">鲁ICP备2021046397号-1</a></span>
            </p>
            
          </div>
        </div>
      </div>
    )
  }
}