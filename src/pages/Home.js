import logo from '../img/logo.png'
import textCarbell from '../img/text_carbell.png'
import call from '../img/call.png'
import carStar from '../img/car_star.png'
import carAdd from '../img/car_add.png'
import carSafe from '../img/car_safe.png'
import { Link } from 'react-router-dom'
import process1 from '../img/processbox1.png'
import process1_mobile from '../img/processbox1_mobile.png'
import process2 from '../img/processbox2.png'
import process2_mobile from '../img/processbox2_mobile.png'
import process3 from '../img/processbox3.png'
import process3_mobile from '../img/processbox3_mobile.png'
import person1 from '../img/person1.png'
import person2 from '../img/person2.png'
import person3 from '../img/person3.png'
import person4 from '../img/person4.png'
import person5 from '../img/person5.png'
import table from '../img/table.png'
import table_mobile from '../img/table_mobile.png'
import gongim from '../img/gongim.png'
import carpos from '../img/carpos.png'
import footerlogo from '../img/footer_logo.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay } from 'swiper/modules';

function Home() {

    return (
        <>
            <header className="widthWrap">
                <h1>
                    <Link to="/">
                        <img src={logo} alt="carbell" />
                    </Link>
                </h1>
                <aside>
                    <Link to=''>로그인</Link>
                </aside>
            </header>
            <div className="visual">
                <h2>
                    <span>이제까지의<br className="br_mobile" /> 차량 관리는 잊어라, </span>
                    <img src={textCarbell} alt="carbell" />
                </h2>
                <a href="tel:1544-1428" className="link_call">
                    <img src={call} alt="call" />
                </a>
            </div>
            <section className="intro">
                <div className="mainbox">
                    <div className="box__inner">
                        <h3>카벨의 전문 상품화</h3>
                        <p>
                            렌터카 회차 후 배차 준비까지 한번에 가능한<br />
                            카벨의 상품을 소개합니다.
                        </p>
                        <img src={carStar} alt="car" />
                    </div>
                </div>
                <div className="box">
                    <div className="box__inner">
                        <h3>검수</h3>
                        <ul>
                            <li>내・외관 스크래치, 파손 부위</li>
                            <li>차량 경고등 및 소모품 상태</li>
                            <li>검수에 따라 고객(임대인) 면책금 확인</li>
                        </ul>
                    </div>
                </div>
                <div className="box">
                    <div className="box__inner">
                        <h3>정비</h3>
                        <ul>
                            <li>차량 경고등 및 일반 수리 진행</li>
                            <li>제조사 보증 수리 확인 및<br />실시간 서비스센터 입고 지원</li>
                            <li>워셔액, 냉각수 등 일반 소모품 무상지원<br />
                                <span className="subtext">(*제휴 업체 사정에 따라 변동 될 수 있음)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="box">
                    <div className="box__inner">
                        <h3>상품화</h3>
                        <ul>
                            <li>실・내외 세차</li>
                            <li>생활 스크래치 무상 폴리싱</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="process">
                <h2>카벨에서는 가능합니다</h2>
                <p className="subtitle">렌터카 유지 보수에 필요한 모든 작업,
                    <br className="br_mobile" />
                    카벨에서는 가능합니다.</p>
                <h3 className="title">
                    <div className="num">1</div>
                    <b>구간 단순화로 시간/비용 감소</b>
                </h3>
                <div className="h70"></div>
                <div className="processbox_outer widthWrap">
                    <div className="processbox box1">
                        <img src={process1} alt="process" className="view_pc" />
                        <img src={process1_mobile} alt="process" className="view_mo" />
                        <h4>기존 6단계+@</h4>
                        <p>렌터카 회차 시, 회차 장소로 딜리버리 직원을 투입하거나 별도 딜리버리 서비스를 이용 / 회차에 따른 고객CS 별도 진행</p>
                    </div>
                    <div className="processbox box2">
                        <img src={process2} alt="process" className="view_pc" />
                        <img src={process2_mobile} alt="process" className="view_mo" />
                        <h4>카벨 3단계</h4>
                        <p>렌터카 회차 시, 회차 장소로 딜리버리 직원을 투입하거나 별도 딜리버리 서비스를 이용 / 회차에 따른 고객CS 별도 진행</p>
                    </div>
                </div>

                <h3 className="title">
                    <div className="num">2</div>
                    <b>렌터카 유지 관리에 필요한<br className="br_mobile" /> 모든 작업 진행</b>
                </h3>
                <div className="h70"></div>
                <div className="processbox box3 widthWrap">
                    <img src={process3} alt="process" className="view_pc" />
                    <img src={process3_mobile} alt="process" className="view_mo" />
                    <p>자동차 엔지니어 검수 및<br className="br_mobile" /> 실/내외 클리닝으로 전문적인 상품화<br />
                    <br className="br_mobile" />
                    상품화 품질과 비용 보장, 정비
                    <br className="br_mobile" />
                     항목별로 전국 동일 요금 기준 단가표 제시</p>
                </div>

                <h3 className="title">
                    <div className="num">3</div>
                    <b>비용 계획 수립 가능</b>
                </h3>
                <div className="h30"></div>
                <h4 className="subtitle2">
                    <span>기존 공임비 대비</span> <br className="br_mobile" />
                    <b>최대 30% 절감</b>
                    <span>가능</span>
                </h4>
                <div className="h70"></div>


                <div className="view_pc">
                    <Swiper
                        slidesPerView={2.1}
                        spaceBetween={40}
                        className="reviewbox"
                        autoplay={{
                            delay: 100,
                        }}
                        breakpoints={{
                            1199: {
                                slidesPerView: 2.5,
                            },
                            1200: {
                                slidesPerView: 3.3,
                            },
                        }}
                        speed={4000}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person1} alt="person" />
                            </div>
                            <div className="text">
                            그동안에는 고객이 지방에서 정비가 필요하면 응대에 많은 어려움이 있었는데, 카벨 이용하면 신경을 안써도되니 너무 좋습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person2} alt="person" />
                            </div>
                            <div className="text">
                            반납 후 바로 재 배차를 할 수 있어서, 더 많은 배차에 집중할 수 있습니다. 비용이 조금 더 나간다고 하더라도 결과적으론 더 수익이 났습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person3} alt="person" />
                            </div>
                            <div className="text">
                            정비할 때 고객에게 영수증 처리하면 제휴사보다 비싼 금액에 정비를 했는데, 전국 어디서든 동일한 가격이라고 하니 좋습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person4} alt="person" />
                            </div>
                            <div className="text">
                            렌트카 가동을 못하면 그만큼 손해인데, 덕분에 서비스센터에 빠르게 입/출고 해서 바로 가동했습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person5} alt="person" />
                            </div>
                            <div className="text">
                            바쁘다는 핑계로 차량관리에 소홀했는데, 카벨에서 맡아서 해주니 좋네요.
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="view_mo_swiper">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
                        className="reviewbox"
                        autoplay={{
                            delay: 400,
                        }}
                        speed={5000}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person1} alt="person" />
                            </div>
                            <div className="text">
                            그동안에는 고객이 지방에서 정비가 필요하면 응대에 많은 어려움이 있었는데, 카벨 이용하면 신경을 안써도되니 너무 좋습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person2} alt="person" />
                            </div>
                            <div className="text">
                            반납 후 바로 재 배차를 할 수 있어서, 더 많은 배차에 집중할 수 있습니다. 비용이 조금 더 나간다고 하더라도 결과적으론 더 수익이 났습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person3} alt="person" />
                            </div>
                            <div className="text">
                            정비할 때 고객에게 영수증 처리하면 제휴사보다 비싼 금액에 정비를 했는데, 전국 어디서든 동일한 가격이라고 하니 좋습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person4} alt="person" />
                            </div>
                            <div className="text">
                            렌트카 가동을 못하면 그만큼 손해인데, 덕분에 서비스센터에 빠르게 입/출고 해서 바로 가동했습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person5} alt="person" />
                            </div>
                            <div className="text">
                            바쁘다는 핑계로 차량관리에 소홀했는데, 카벨에서 맡아서 해주니 좋네요.
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <div className="view_mo_swiper">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={20}
                        className="reviewbox"
                        autoplay={{
                            delay:800,
                        }}
                        speed={5000}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person4} alt="person" />
                            </div>
                            <div className="text">
                            렌트카 가동을 못하면 그만큼 손해인데, 덕분에 서비스센터에 빠르게 입/출고 해서 바로 가동했습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person5} alt="person" />
                            </div>
                            <div className="text">
                            바쁘다는 핑계로 차량관리에 소홀했는데, 카벨에서 맡아서 해주니 좋네요.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person1} alt="person" />
                            </div>
                            <div className="text">
                            그동안에는 고객이 지방에서 정비가 필요하면 응대에 많은 어려움이 있었는데, 카벨 이용하면 신경을 안써도되니 너무 좋습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person2} alt="person" />
                            </div>
                            <div className="text">
                            반납 후 바로 재 배차를 할 수 있어서, 더 많은 배차에 집중할 수 있습니다. 비용이 조금 더 나간다고 하더라도 결과적으론 더 수익이 났습니다.
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="box">
                            <div className="profile">
                                <img src={person3} alt="person" />
                            </div>
                            <div className="text">
                            정비할 때 고객에게 영수증 처리하면 제휴사보다 비싼 금액에 정비를 했는데, 전국 어디서든 동일한 가격이라고 하니 좋습니다.
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="h140"></div>

                <h3 className="title">
                    <div className="num">4</div>
                    <b>반납 딜리버리 발생 수에 따른<br className="br_mobile" />
                        효율적 비용 지출</b>
                </h3>

                <div className="h20"></div>

                <p className="subtitle3">
                    <span>직원 1인의 급여는
                        <br className="br_mobile" />
                        딜리버리 건수에 관계 없이 동일하나, </span><br className="br_mobile" />
                    <b>카벨은 딜리버리 건수에 비례하여
                    <br className="br_mobile" />
                        비용이 발생합니다.</b>
                </p>

                <div className="h50"></div>

                <div className="tablewrap">
                    <img src={table} alt="table" className="view_pc" />
                    <img src={table_mobile} alt="table" className="view_mo" />
                    <span className="tableoption">(원, VAT 별도)</span>
                </div>
            </section>

            <div className="h200"></div>

            <section className="intro intro2">
                <div className="box">
                    <div className="box__inner">
                        <h3>고객 CS 대행</h3>
                        <ul>
                            <li>렌터카 회차 및 정비</li>
                            <li>프로세스 내 고객 CS 대행</li>
                        </ul>
                    </div>
                </div>
                <div className="box">
                    <div className="box__inner">
                        <h3>각종 혜택</h3>
                        <ul>
                            <li>
                                <div className="benefit">
                                    <img src={carSafe} alt="car" />
                                    <p>
                                        제조사별 공식 서비스센터<br />입/출고 실시간 지원
                                    </p>
                                </div>
                            </li>
                            <li>차량별 보증 기간 및<br />잔여 무상 쿠폰 안내<br /></li>
                        </ul>
                    </div>
                </div>
                <div className="box">
                    <div className="box__inner">
                        <h3>가이드라인 제공</h3>
                        <ul>
                            <li>브랜드, 차종별 잔고장에<br />대한 가이드라인 제공</li>
                        </ul>
                    </div>
                </div>
                <div className="mainbox">
                    <div className="box__inner">
                        <h3>카벨의 부가 서비스</h3>
                        <img src={carAdd} alt="car" />
                    </div>
                </div>
            </section>

            <section className="associate">
                <h2>카벨의 제휴사</h2>
                <div className="text">
                    <div className="logos">
                        <img src={gongim} alt="공임나라" />
                        <img src={carpos} alt="carpos" />
                    </div>
                    <p>
                        전국 400여개의 오프라인 매장을 보유한 <br className="br_mobile" />
                        <b> 공임나라, 카포스 정비조합</b>
                        제휴업체에서
                        <br className="br_mobile" />
                        정식 차량 관리 위탁 계약을 체결함으로써<br className="br_mobile" />
                        <b>검수/정비/상품화 서비스를 받아보실 수 있습니다.</b>
                    </p>
                </div>
            </section>

            <footer>
                <div className="inner">
                    <img src={footerlogo} alt="carbell"  className="footer_logo" />
                    <div className="text">
                        <div className="copy">
                            ©2023. Carbell Inc. All Rights Reserved.
                        </div>
                        <address>
                            <span>카벨</span>
                            <span>|</span>
                            <span>사업자등록번호 792-87-03104</span>
                            <span>대표자명 서윤식</span><br />
                            <span>고객센터번호: 1544-1428</span>
                            <span>|</span>
                            <span>E-mail: cs@carbell.co.kr</span>
                        </address>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Home;