import React from 'react'

type Props = {}

function CarouselSlide({}: Props) {
  return (
    <div>
      <div className="mobile">
        <div className="flex">
          <button className="back" onClick="openList()">
            <div className="back-symbol"></div>
            <div className="shadow"></div>
          </button>
          <button className="menu" onClick="openList()">
            <div className="line"></div>
            <div className="line1"></div>
            <div className="line2"></div>
          </button>
        </div>
        <div className="song">
          <div className="circle"></div>
          <div className="display">
            <div className="symbol">
              <span className="st-line" id="l"></span>
              <span className="st-line1" id="l1"></span>
              <span className="st-line2" id="l2"></span>

              <span className="st-line3" id="l3"></span>
              <span className="st-line4" id="l4"></span>
              <span className="st-line5" id="l5"></span>
            </div>
          </div>
        </div>
        <div className="song-name" id="song-name">
          Drag me down
        </div>
        <div className="album-name" id="album-name">
          One direction
        </div>
        <div className="slider">
          <button className="repeat" onClick="repeatSVG()">
            {' '}
            <svg
              id="repeatSvg"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="#7d7d7d"
              className="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>
            <div className="shadow2"></div>
          </button>
          <div id="time">01:20</div>
          <div className="slider-circle circleAnimate" id="slider-circle">
            <div className="blue-circle"></div>
          </div>
          <div id="slider-left" className="slider-left animateBlue"></div>
        </div>

        <div className="flex margin">
          <button className="previous" onClick="previousSong()">
            <div className="triangle"></div>
            <div className="triangle1"></div>
            <div className="shadow1"></div>
          </button>
          <button className="play" id="play" onclick="clickedPlay()">
            <div className="triangle2" id="triangle"></div>
            <div className="pause" id="pause">
              <div className="pause-line"></div>
              <div className="pause-line2"></div>
            </div>
            <div className="shadow1"></div>
          </button>

          <button className="next" onClick="nextSong()">
            <div className="triangle3"></div>
            <div className="triangle4"></div>
            <div className="shadow1"></div>
          </button>
        </div>
      </div>
      <div className="list" id="list">
        <div>
          <button className="back" onClick="goBack()">
            <div className="back-symbol"></div>
            <div className="shadow"></div>
          </button>
          <ul>
            <li onClick="songClick(event)" id="li1">
              <div className="flex">
                <div>
                  <div id="song1"></div>
                  <div id="album1"></div>
                </div>
                <p id="time1"></p>
              </div>
            </li>

            <li onClick="songClick(event)" id="li2">
              <div className="flex">
                <div>
                  <div id="song2"></div>
                  <div id="album2"></div>
                </div>
                <p id="time2"></p>
              </div>
            </li>
            <li onClick="songClick(event)" id="li3">
              <div className="flex">
                <div>
                  <div id="song3"></div>
                  <div id="album3"></div>
                </div>
                <p id="time3"></p>
              </div>
            </li>
            <li onClick="songClick(event)" id="li4">
              <div className="flex">
                <div>
                  <div id="song4"></div>
                  <div id="album4"></div>
                </div>
                <p id="time4"></p>
              </div>
            </li>
            <li onClick="songClick(event)" id="li5">
              <div className="flex">
                <div>
                  <div id="song5"></div>
                  <div id="album5"></div>
                </div>
                <p id="time5"></p>
              </div>
            </li>
            <li onClick="songClick(event)" id="li6">
              <div className="flex">
                <div>
                  <div id="song6"></div>
                  <div id="album6"></div>
                </div>
                <p id="time6"></p>
              </div>
            </li>
            <li onClick="songClick(event)" id="li7">
              <div className="flex">
                <div>
                  <div id="song7"></div>
                  <div id="album7"></div>
                </div>
                <p id="time7"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CarouselSlide
