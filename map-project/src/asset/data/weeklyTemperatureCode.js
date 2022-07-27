// 중기 기온 지역별 코드값이 들어있는 객체 local json
const weeklyTemperatureCodeData = [
   {
      "region": "서울·인천·경기",
      "city": "서울",
      "code": "11B10101"
   },
   {
      "region": "서울·인천·경기",
      "city": "인천",
      "code": "11B20201"
   },
   {
      "region": "서울·인천·경기",
      "city": "수원",
      "code": "11B20601"
   },
   {
      "region": "서울·인천·경기",
      "city": "성남",
      "code": "11B20605"
   },
   {
      "region": "서울·인천·경기",
      "city": "안양",
      "code": "11B20602"
   },
   {
      "region": "서울·인천·경기",
      "city": "광명",
      "code": "11B10103"
   },
   {
      "region": "서울·인천·경기",
      "city": "과천",
      "code": "11B10102"
   },
   {
      "region": "서울·인천·경기",
      "city": "평택",
      "code": "11B20606"
   },
   {
      "region": "서울·인천·경기",
      "city": "오산",
      "code": "11B20603"
   },
   {
      "region": "서울·인천·경기",
      "city": "의왕",
      "code": "11B20609"
   },
   {
      "region": "서울·인천·경기",
      "city": "용인",
      "code": "11B20612"
   },
   {
      "region": "서울·인천·경기",
      "city": "군포",
      "code": "11B20610"
   },
   {
      "region": "서울·인천·경기",
      "city": "안성",
      "code": "11B20611"
   },
   {
      "region": "서울·인천·경기",
      "city": "화성",
      "code": "11B20604"
   },
   {
      "region": "서울·인천·경기",
      "city": "양평",
      "code": "11B20503"
   },
   {
      "region": "서울·인천·경기",
      "city": "구리",
      "code": "11B20501"
   },
   {
      "region": "서울·인천·경기",
      "city": "남양주",
      "code": "11B20502"
   },
   {
      "region": "서울·인천·경기",
      "city": "하남",
      "code": "11B20504"
   },
   {
      "region": "서울·인천·경기",
      "city": "이천",
      "code": "11B20701"
   },
   {
      "region": "서울·인천·경기",
      "city": "여주",
      "code": "11B20703"
   },
   {
      "region": "서울·인천·경기",
      "city": "광주",
      "code": "11B20702"
   },
   {
      "region": "서울·인천·경기",
      "city": "의정부",
      "code": "11B20301"
   },
   {
      "region": "서울·인천·경기",
      "city": "고양",
      "code": "11B20302"
   },
   {
      "region": "서울·인천·경기",
      "city": "파주",
      "code": "11B20305"
   },
   {
      "region": "서울·인천·경기",
      "city": "양주",
      "code": "11B20304"
   },
   {
      "region": "서울·인천·경기",
      "city": "동두천",
      "code": "11B20401"
   },
   {
      "region": "서울·인천·경기",
      "city": "연천",
      "code": "11B20402"
   },
   {
      "region": "서울·인천·경기",
      "city": "포천",
      "code": "11B20403"
   },
   {
      "region": "서울·인천·경기",
      "city": "가평",
      "code": "11B20404"
   },
   {
      "region": "서울·인천·경기",
      "city": "강화",
      "code": "11B20101"
   },
   {
      "region": "서울·인천·경기",
      "city": "김포",
      "code": "11B20102"
   },
   {
      "region": "서울·인천·경기",
      "city": "시흥",
      "code": "11B20202"
   },
   {
      "region": "서울·인천·경기",
      "city": "부천",
      "code": "11B20204"
   },
   {
      "region": "서울·인천·경기",
      "city": "안산",
      "code": "11B20203"
   },
   {
      "region": "서울·인천·경기",
      "city": "백령도",
      "code": "11A00101"
   },
   {
      "region": "부산.울산.경남",
      "city": "부산",
      "code": "11H20201"
   },
   {
      "region": "부산.울산.경남",
      "city": "울산",
      "code": "11H20101"
   },
   {
      "region": "부산.울산.경남",
      "city": "김해",
      "code": "11H20304"
   },
   {
      "region": "부산.울산.경남",
      "city": "양산",
      "code": "11H20102"
   },
   {
      "region": "부산.울산.경남",
      "city": "창원",
      "code": "11H20301"
   },
   {
      "region": "부산.울산.경남",
      "city": "밀양",
      "code": "11H20601"
   },
   {
      "region": "부산.울산.경남",
      "city": "함안",
      "code": "11H20603"
   },
   {
      "region": "부산.울산.경남",
      "city": "창녕",
      "code": "11H20604"
   },
   {
      "region": "부산.울산.경남",
      "city": "의령",
      "code": "11H20602"
   },
   {
      "region": "부산.울산.경남",
      "city": "진주",
      "code": "11H20701"
   },
   {
      "region": "부산.울산.경남",
      "city": "하동",
      "code": "11H20704"
   },
   {
      "region": "부산.울산.경남",
      "city": "사천",
      "code": "11H20402"
   },
   {
      "region": "부산.울산.경남",
      "city": "거창",
      "code": "11H20502"
   },
   {
      "region": "부산.울산.경남",
      "city": "합천",
      "code": "11H20503"
   },
   {
      "region": "부산.울산.경남",
      "city": "산청",
      "code": "11H20703"
   },
   {
      "region": "부산.울산.경남",
      "city": "함양",
      "code": "11H20501"
   },
   {
      "region": "부산.울산.경남",
      "city": "통영",
      "code": "11H20401"
   },
   {
      "region": "부산.울산.경남",
      "city": "거제",
      "code": "11H20403"
   },
   {
      "region": "부산.울산.경남",
      "city": "고성",
      "code": "11H20404"
   },
   {
      "region": "부산.울산.경남",
      "city": "남해",
      "code": "11H20405"
   },
   {
      "region": "대구.경북",
      "city": "대구",
      "code": "11H10701"
   },
   {
      "region": "대구.경북",
      "city": "영천",
      "code": "11H10702"
   },
   {
      "region": "대구.경북",
      "city": "경산",
      "code": "11H10703"
   },
   {
      "region": "대구.경북",
      "city": "청도",
      "code": "11H10704"
   },
   {
      "region": "대구.경북",
      "city": "칠곡",
      "code": "11H10705"
   },
   {
      "region": "대구.경북",
      "city": "김천",
      "code": "11H10601"
   },
   {
      "region": "대구.경북",
      "city": "구미",
      "code": "11H10602"
   },
   {
      "region": "대구.경북",
      "city": "군위",
      "code": "11H10603"
   },
   {
      "region": "대구.경북",
      "city": "고령",
      "code": "11H10604"
   },
   {
      "region": "대구.경북",
      "city": "성주",
      "code": "11H10605"
   },
   {
      "region": "대구.경북",
      "city": "안동",
      "code": "11H10501"
   },
   {
      "region": "대구.경북",
      "city": "의성",
      "code": "11H10502"
   },
   {
      "region": "대구.경북",
      "city": "청송",
      "code": "11H10503"
   },
   {
      "region": "대구.경북",
      "city": "상주",
      "code": "11H10302"
   },
   {
      "region": "대구.경북",
      "city": "문경",
      "code": "11H10301"
   },
   {
      "region": "대구.경북",
      "city": "예천",
      "code": "11H10303"
   },
   {
      "region": "대구.경북",
      "city": "영주",
      "code": "11H10401"
   },
   {
      "region": "대구.경북",
      "city": "봉화",
      "code": "11H10402"
   },
   {
      "region": "대구.경북",
      "city": "영양",
      "code": "11H10403"
   },
   {
      "region": "대구.경북",
      "city": "울진",
      "code": "11H10101"
   },
   {
      "region": "대구.경북",
      "city": "영덕",
      "code": "11H10102"
   },
   {
      "region": "대구.경북",
      "city": "포항",
      "code": "11H10201"
   },
   {
      "region": "대구.경북",
      "city": "경주",
      "code": "11H10202"
   },
   {
      "region": "대구.경북",
      "city": "울릉",
      "code": "11E00101"
   },
   {
      "region": "대구.경북",
      "city": "독도",
      "code": "11E00102"
   },
   {
      "region": "광주.전남",
      "city": "광주",
      "code": "11F20501"
   },
   {
      "region": "광주.전남",
      "city": "나주",
      "code": "11F20503"
   },
   {
      "region": "광주.전남",
      "city": "장성",
      "code": "11F20502"
   },
   {
      "region": "광주.전남",
      "city": "담양",
      "code": "11F20504"
   },
   {
      "region": "광주.전남",
      "city": "화순",
      "code": "11F20505"
   },
   {
      "region": "광주.전남",
      "city": "영광",
      "code": "21F20102"
   },
   {
      "region": "광주.전남",
      "city": "함평",
      "code": "21F20101"
   },
   {
      "region": "광주.전남",
      "city": "목포",
      "code": "21F20801"
   },
   {
      "region": "광주.전남",
      "city": "무안",
      "code": "21F20804"
   },
   {
      "region": "광주.전남",
      "city": "영암",
      "code": "21F20802"
   },
   {
      "region": "광주.전남",
      "city": "진도",
      "code": "21F20201"
   },
   {
      "region": "광주.전남",
      "city": "신안",
      "code": "21F20803"
   },
   {
      "region": "광주.전남",
      "city": "흑산도",
      "code": "11F20701"
   },
   {
      "region": "광주.전남",
      "city": "순천",
      "code": "11F20603"
   },
   {
      "region": "광주.전남",
      "city": "광양",
      "code": "11F20402"
   },
   {
      "region": "광주.전남",
      "city": "구례",
      "code": "11F20601"
   },
   {
      "region": "광주.전남",
      "city": "곡성",
      "code": "11F20602"
   },
   {
      "region": "광주.전남",
      "city": "완도",
      "code": "11F20301"
   },
   {
      "region": "광주.전남",
      "city": "강진",
      "code": "11F20303"
   },
   {
      "region": "광주.전남",
      "city": "장흥",
      "code": "11F20304"
   },
   {
      "region": "광주.전남",
      "city": "해남",
      "code": "11F20302"
   },
   {
      "region": "광주.전남",
      "city": "여수",
      "code": "11F20401"
   },
   {
      "region": "광주.전남",
      "city": "고흥",
      "code": "11F20403"
   },
   {
      "region": "광주.전남",
      "city": "보성",
      "code": "11F20404"
   },
   {
      "region": "전북",
      "city": "전주",
      "code": "11F10201"
   },
   {
      "region": "전북",
      "city": "익산",
      "code": "11F10202"
   },
   {
      "region": "전북",
      "city": "군산",
      "code": "21F10501"
   },
   {
      "region": "전북",
      "city": "정읍",
      "code": "11F10203"
   },
   {
      "region": "전북",
      "city": "김제",
      "code": "21F10502"
   },
   {
      "region": "전북",
      "city": "남원",
      "code": "11F10401"
   },
   {
      "region": "전북",
      "city": "고창",
      "code": "21F10601"
   },
   {
      "region": "전북",
      "city": "무주",
      "code": "11F10302"
   },
   {
      "region": "전북",
      "city": "부안",
      "code": "21F10602"
   },
   {
      "region": "전북",
      "city": "순창",
      "code": "11F10403"
   },
   {
      "region": "전북",
      "city": "완주",
      "code": "11F10204"
   },
   {
      "region": "전북",
      "city": "임실",
      "code": "11F10402"
   },
   {
      "region": "전북",
      "city": "장수",
      "code": "11F10301"
   },
   {
      "region": "전북",
      "city": "진안",
      "code": "11F10303"
   },
   {
      "region": "대전.세종.충남",
      "city": "대전",
      "code": "11C20401"
   },
   {
      "region": "대전.세종.충남",
      "city": "세종",
      "code": "11C20404"
   },
   {
      "region": "대전.세종.충남",
      "city": "공주",
      "code": "11C20402"
   },
   {
      "region": "대전.세종.충남",
      "city": "논산",
      "code": "11C20602"
   },
   {
      "region": "대전.세종.충남",
      "city": "계룡",
      "code": "11C20403"
   },
   {
      "region": "대전.세종.충남",
      "city": "금산",
      "code": "11C20601"
   },
   {
      "region": "대전.세종.충남",
      "city": "천안",
      "code": "11C20301"
   },
   {
      "region": "대전.세종.충남",
      "city": "아산",
      "code": "11C20302"
   },
   {
      "region": "대전.세종.충남",
      "city": "예산",
      "code": "11C20303"
   },
   {
      "region": "대전.세종.충남",
      "city": "서산",
      "code": "11C20101"
   },
   {
      "region": "대전.세종.충남",
      "city": "태안",
      "code": "11C20102"
   },
   {
      "region": "대전.세종.충남",
      "city": "당진",
      "code": "11C20103"
   },
   {
      "region": "대전.세종.충남",
      "city": "홍성",
      "code": "11C20104"
   },
   {
      "region": "대전.세종.충남",
      "city": "보령",
      "code": "11C20201"
   },
   {
      "region": "대전.세종.충남",
      "city": "서천",
      "code": "11C20202"
   },
   {
      "region": "대전.세종.충남",
      "city": "청양",
      "code": "11C20502"
   },
   {
      "region": "대전.세종.충남",
      "city": "부여",
      "code": "11C20501"
   },
   {
      "region": "충북",
      "city": "청주",
      "code": "11C10301"
   },
   {
      "region": "충북",
      "city": "증평",
      "code": "11C10304"
   },
   {
      "region": "충북",
      "city": "괴산",
      "code": "11C10303"
   },
   {
      "region": "충북",
      "city": "진천",
      "code": "11C10102"
   },
   {
      "region": "충북",
      "city": "충주",
      "code": "11C10101"
   },
   {
      "region": "충북",
      "city": "음성",
      "code": "11C10103"
   },
   {
      "region": "충북",
      "city": "제천",
      "code": "11C10201"
   },
   {
      "region": "충북",
      "city": "단양",
      "code": "11C10202"
   },
   {
      "region": "충북",
      "city": "보은",
      "code": "11C10302"
   },
   {
      "region": "충북",
      "city": "옥천",
      "code": "11C10403"
   },
   {
      "region": "충북",
      "city": "영동",
      "code": "11C10402"
   },
   {
      "region": "충북",
      "city": "추풍령",
      "code": "11C10401"
   },
   {
      "region": "강원",
      "city": "철원",
      "code": "11D10101"
   },
   {
      "region": "강원",
      "city": "화천",
      "code": "11D10102"
   },
   {
      "region": "강원",
      "city": "인제",
      "code": "11D10201"
   },
   {
      "region": "강원",
      "city": "양구",
      "code": "11D10202"
   },
   {
      "region": "강원",
      "city": "춘천",
      "code": "11D10301"
   },
   {
      "region": "강원",
      "city": "홍천",
      "code": "11D10302"
   },
   {
      "region": "강원",
      "city": "원주",
      "code": "11D10401"
   },
   {
      "region": "강원",
      "city": "횡성",
      "code": "11D10402"
   },
   {
      "region": "강원",
      "city": "영월",
      "code": "11D10501"
   },
   {
      "region": "강원",
      "city": "정선",
      "code": "11D10502"
   },
   {
      "region": "강원",
      "city": "평창",
      "code": "11D10503"
   },
   {
      "region": "강원",
      "city": "대관령",
      "code": "11D20201"
   },
   {
      "region": "강원",
      "city": "속초",
      "code": "11D20401"
   },
   {
      "region": "강원",
      "city": "고성",
      "code": "11D20402"
   },
   {
      "region": "강원",
      "city": "양양",
      "code": "11D20403"
   },
   {
      "region": "강원",
      "city": "강릉",
      "code": "11D20501"
   },
   {
      "region": "강원",
      "city": "동해",
      "code": "11D20601"
   },
   {
      "region": "강원",
      "city": "삼척",
      "code": "11D20602"
   },
   {
      "region": "강원",
      "city": "태백",
      "code": "11D20301"
   },
   {
      "region": "제주특별자치도",
      "city": "제주",
      "code": "11G00201"
   },
   {
      "region": "제주특별자치도",
      "city": "서귀포",
      "code": "11G00401"
   },
   {
      "region": "제주특별자치도",
      "city": "성산",
      "code": "11G00101"
   },
   {
      "region": "제주특별자치도",
      "city": "고산",
      "code": "11G00501"
   },
   {
      "region": "제주특별자치도",
      "city": "성판악",
      "code": "11G00302"
   },
   {
      "region": "제주특별자치도",
      "city": "이어도",
      "code": "11G00601"
   },
   {
      "region": "제주특별자치도",
      "city": "추자도",
      "code": "11G00800"
   }
]

export { weeklyTemperatureCodeData };
