import React from "react";

const MagazineDetail = () => {
  return (
    <>
      <Header/>

    {/* 왼쪽 */}
    <main className="magazineDetail">
        <section className="content">
          <div className="image-section">
            <img
              src="images/magazine/magazinedetail.png"
              alt="이서연 인터뷰 이미지"
            />
          </div>

          <section className="article">
          <p><strong>“좋은 공간은 침묵으로 말을 걸어요.”</strong></p>
          <p>
           이서연은 공간을 말보다 먼저 느끼는 사람이다. 미대를 졸업하고 가구 디자인을 전공했
          지만, 지금은 ‘사람이 사d는 모든 장소’를 설계한다. 그녀의 작업은 고요하지만 단단하다.
          공간을 보는 눈, 감각을 배치하는 기술, 그리고 ‘어떻게 입느냐’에 대한 태도가 자연스럽게
          이어진다.

           서울 성수동, 노출 콘크리트 벽과 오래된 철제 선반이 조화를 이루는 그녀의 스튜디오에
          서는 음악 대신 연필 소리와 종이 넘기는 소리가 들린다. 책상 위에는 NØRD의 셔츠형 자
          켓이 반듯하게 걸려 있다. “좋은 가구를 만들 때처럼, 옷도 어떤 동선을 상상하게 만들죠.
          단추의 위치, 옷깃의 각도, 소매의 여유. 다 공간 언어예요.”

          이서연이 선택한 옷은 늘 같은 흐름을 따른다. 기능성과 구조감, 그리고 필요 없는 장식의
          부재. NØRD의 셔츠 자켓은 그녀의 미감과 닮았다. “실내에서 앉았다가 일어설 때, 커피
          를 따를 때, 문을 열고 나갈 때. 옷이 방해가 되지 않아야 해요.”
          그녀는 최근 한 공방을 리뉴얼했다. 작은 수납장 하나를 바꾸고, 창문 틀에 얇은 선반을
          덧댔다. “사용자의 일상 속 동작을 미리 그려요. 그리고 그 안에 가장 자연스러운 위치로
          사물을 놓는 거죠.” 옷도 마찬가지다. 그녀에게 옷은 또 다른 작은 방이자, 하루를 지탱하
          는 구조물이다.

           “공간은 기억이에요. 옷도 그래요. 내가 오늘 어떤 마음이었는지, 어떤 선택을 했는지 말
          없이 드러나는 거죠.”
          NØRD의 셔츠형 자켓은 그녀에게 단지 미적 선택이 아닌, 일의 연장선이다. 주머니의 깊
          이나 절개선 하나에도 생각이 머문다. 그리고 그 작은 요소들이 모여 하나의 분위기를 만
          들고, 그 분위기가 오늘 하루를 만들어낸다.
          </p>
        </section>

    {/* 오른쪽 */}
        <div className="text-section">
            <div className="volume">.VOL.6</div>
            <h2 className="title">
              디테일이 말하는 공간 -<br/>
              인테리어 디자이너 이서연의<br/>
              실루엣
            </h2>
            <div className="date">2025.04.08</div>
        </div>
        </section>

        <div className="navigation">
          PREV | LIST | NEXT
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default MagazineDetail;
