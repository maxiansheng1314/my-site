export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  // ------------------- 在这里修改你的卡密列表 -------------------
  const validKeys = ["01NWJI", "044FHI", "0764ZO", "079BZS", "07IQG6", "09JMOK", "09O0WP", "0GPLZV", "0IEQKS", "0M06XI", "0NUQUJ", "0SECEL", "0UDTZL", "0W6F0V", "0WIPIW", "0XGQUN", "0Z2X6H", "105GWZ", "137KOA", "17BEV8", "17QUCT", "1D07SK", "1GLQQ8", "1M08HV", "1OYEME", "1VX9MX", "1WVUPP", "1YSEB1", "24EBV8", "26VA70", "28PXR7", "2B18PT", "2C7SRP", "2D4O2Q", "2HVBRU", "2J2W9R", "2K2MGU", "2LN3HM", "2NGOBM", "2OAG02", "2QKT4Q", "2RUART", "2T8ZT3", "2YHE1I", "388A15", "39SQLG", "3AYT40", "3CIIQ5", "3ERLCM", "3F8GXX", "3HA4HJ", "3IR0YJ", "3JWUEK", "3L61OK", "3NTONU", "3P5TKK", "3PDOYD", "3PEHTQ", "3POUGW", "3QSBBI", "3S2GLQ", "3SX67M", "40HIBM", "40T48I", "419HGS", "45XN5B", "4682UJ", "4849MN", "4BPCNF", "4FCME4", "4FJHCB", "4IV8U0", "4XF7NP", "4XTQXR", "4XTYCB", "50IEIM", "531DFZ", "556YOG", "55LAUR", "571NYT", "5CJAI6", "5DLDGO", "5DM6CQ", "5EO4ML", "5HMEBU", "5MRA3P", "5MRL2E", "5NE0LD", "5PF4Z2", "5PXQVR", "5W9PF6", "5X66RU", "5YVK2X", "5ZG91W", "636FDQ", "66BKL2", "6CLDTW", "6DRUGS", "6UUJ3B", "6ZBGHD", "709DFK", "71215J", "74222M", "7AMYYR", "7B8DCC", "7DQU4A", "7E60EF", "7IUKAG", "7N9WD8", "7NV8YX", "7SLNWL", "7UBWYT", "7YP5AH", "84VQAO", "862MJD", "86LAKJ", "87K0QB", "8ARN5J", "8E2GIP", "8JA7EA", "8KOEIG", "8PB0XX", "8QZH06", "8S26WJ", "8W3ZCF", "8XXX6G", "8ZEHES", "8ZK5R8", "900N8V", "941CBS", "9BRSWA", "9C3VXL", "9CN9U0", "9DCTZD", "9RBHA0", "9RKYYN", "9TMZON", "9X7HT2", "9XBUG3", "9Y3F4Y", "9YRRDH", "A0OWJ6", "A384NS", "A46EPW", "A4GVLN", "A4PC51", "A7932D", "A8KPRV", "AACH3N", "AAF86C", "AEWKWK", "AGDQXF", "AJFFT7", "AMO4Z5", "ANAVAM", "ANKGF8", "ANQ8T8", "AP6G8O", "AROLY4", "AW5AI7", "B0D3TI", "B0H7HT", "B15V5M", "B4GY8Z", "B54HL5", "B6AIY7", "BFQD6S", "BG620Z", "BK32CO", "BNFCXV", "BVQRUF", "C1JAB0", "C845WM", "CCK1NI", "CF0HJE", "CGIZ9E", "CHF11C", "CIT842", "CLAPXV", "CMK73L", "CSH1C7", "CTL90R", "CU0G27", "CUP0YI", "CVMW6T", "D6DZDS", "D6EIFU", "DCZHB5", "DF0J67", "DF91OF", "DIB6E6", "DJ0TCC", "DMWB02", "DREVFQ", "DVG8QE", "DZ9MWZ", "E279L5", "E6O7VB", "E9LXJ2", "EGUTSE", "EJ65ZH", "EJV5N9", "EK639D", "EL9K5A", "ELN8MZ", "EMFB9Y", "EN4W8A", "EP3R9H", "EQ58UK", "ETD86M", "EVG7M8", "EW7U6S", "EXL2B7", "EYA75G", "EZK4TN", "F2MZ8A", "F36J9S", "F3KZYC", "F4576N", "F4C6KZ", "F58LWR", "F76G2H", "F7T3XS", "F89VPE", "F8BZ4E", "F95C3P", "FA6H8D", "FAWZ6E", "FB3W9U", "FB7N4K", "FC2Y7T", "FD4L9B", "FE5A3V", "FF3Z7K", "FG82L9", "FH7W3A", "FJ49DX", "FK27N8", "FL6M5V", "FM937B", "FN2Y6C", "FP74ZK", "FQ38MV", "FR6X2H", "FS95L7", "FT2W4N", "FU7A3Z", "FV58BM", "FW3K6T", "FX924E", "FY67AV", "FZ23M9", "G27Y4S", "G3A8WK", "G462ZN", "G4R9VT", "G573HE", "G6D2BS", "G7M5AK", "G84Z7L", "G936RC", "GA52VM", "GB78TZ", "GC34YH", "GD9A2M", "GE67PX", "GF258Z", "GG73NW", "GH46AV", "GJ285X", "GK63Y9", "GL72BE", "GM59RW", "GN368K", "GP27YZ", "GQ64AV", "GR395M", "GS72N8", "GT46ZX", "GU295B", "GV638M", "GW37YH", "GX824L", "GY569A", "GZ237W", "H285ZK", "H36W7A", "H429VM", "H573TN", "H682BG", "H735AK", "H864YZ", "H927RW", "HA538M", "HB726Z", "HC394V", "HD625N", "HE837L", "HF249A", "HG573W", "HJ826M", "HK359Z", "HL672V", "HM248A", "HN735K", "HP286Z", "HQ537M", "HR627A", "HS385K", "HT724Z", "HU269M", "HV538A", "HW827K", "HX365Z", "HY729M", "HZ253A", "J257AV", "J382ZK", "J4693M", "J5278Z", "J634VK", "J7825A", "J8563Z", "JA279M", "JB634V", "JC382K", "JD756Z", "JE249M", "JF583A", "JG726K", "JH395Z", "JJ628M", "JK257A", "JL834Z", "JM369V", "JN725K", "JP286Z", "JQ537M", "JR692A", "JS358K", "JT639Z", "JU269M", "JV538A", "JW827K", "JX365Z", "JY729M", "JZ253A", "K2638M", "K375AV", "K429ZK", "K5837M", "K6329A", "K7548Z", "K8263V", "KA572M", "KB396Z", "KC725A", "KD268K", "KE537Z", "KF826M", "KG395A", "KH728V", "KJ283Z", "KK657M", "KL392A", "KM726K", "KN258Z", "KP637M", "KQ529A", "KR836V", "KS275Z", "KT639M", "KU352A", "KV728K", "KW263Z", "KX597M", "KY328A", "KZ756V", "L2835Z", "L3679M", "L4258A", "L5732K", "L6829Z", "L7356M", "L8527A", "LA369K", "LB725Z", "LC283M", "LD537A", "LE826K", "LF395Z", "LG728M", "LH263A", "LJ597K", "LK328Z", "LL756M", "LM283A", "LN635K", "LP397Z", "LQ724M", "LR258A", "LS639K", "LT357Z", "LU728M", "LV263A", "LW597K", "LX328Z", "LY756M", "LZ283A", "M2639K", "M3752Z", "M4286A", "M5739M", "M6825K", "M7368Z", "M8523A", "MA579M", "MB362A", "MC725K", "MD283Z", "ME537M", "MF826A", "MG395K", "MH728Z", "MJ263M", "MK597A", "ML328K", "MM756Z", "MN283M", "MP635A", "MQ397K", "MR724Z", "MS258M", "MT639A", "MU357K", "MV728Z", "MW263M", "MX597A", "MY328K", "MZ756Z", "N2835K", "N3679Z", "N4258M", "N5732A", "N6829K", "N7356Z", "N8527M", "NA369A", "NB725K", "NC283Z", "ND537M", "NE826A", "NF395K", "NG728Z", "NH263M", "NJ597A", "NK328K", "NL756Z", "NM283M", "NN635A", "NP397K", "NQ724Z", "NR258M", "NS639A", "NT357K", "NU728Z", "NV263M", "NW597A", "NX328K", "NY756Z", "NZ283M", "P2639A", "P3752K", "P4286Z", "P5739M", "P6825A", "P7368K", "P8523Z", "PA579M", "PB362A", "PC725K", "PD283Z", "PE537M", "PF826A", "PG395K", "PH728Z", "PJ263M", "PK597A", "PL328K", "PM756Z", "PN283M", "PP635A", "PQ397K", "PR724Z", "PS258M", "PT639A", "PU357K", "PV728Z", "PW263M", "PX597A", "PY328K", "PZ756Z", "Q2835A", "Q3679K", "Q4258Z", "Q5732M", "Q6829A", "Q7356K", "Q8527Z", "QA369M", "QB725A", "QC283K", "QD537Z", "QE826M", "QF395A", "QG728K", "QH263Z", "QJ597M", "QK328A", "QL756K", "QM283Z", "QN635M", "QP397A", "QQ724K", "QR258Z", "QS639M", "QT357A", "QU728K", "QV263Z", "QW597M", "QX328A", "QY756K", "QZ283Z", "R2639M", "R3752A", "R4286K", "R5739Z", "R6825M", "R7368A", "R8523K", "RA579Z", "RB362M", "RC725A", "RD283K", "RE537Z", "RF826M", "RG395A", "RH728K", "RJ263Z", "RK597M", "RL328A", "RM756K", "RN283Z", "RP635M", "RQ397A", "RR724K", "RS258Z", "RT639M", "RU357A", "RV728K", "RW263Z", "RX597M", "RY328A", "RZ756K", "S2835M", "S3679A", "S4258K", "S5732Z", "S6829M", "S7356A", "S8527K", "SA369Z", "SB725M", "SC283A", "SD537K", "SE826Z", "SF395M", "SG728A", "SH263K", "SJ597Z", "SK328M", "SL756A", "SM283K", "SN635Z", "SP397M", "SQ724A", "SR258K", "SS639Z", "ST357M", "SU728A", "SV263K", "SW597Z", "SX328M", "SY756A", "SZ283K", "T2639Z", "T3752M", "T4286A", "T5739K", "T6825Z", "T7368M", "T8523A", "TA579K", "TB362Z", "TC725M", "TD283A", "TE537K", "TF826Z", "TG395M", "TH728A", "TJ263K", "TK597Z", "TL328M", "TM756A", "TN283K", "TP635Z", "TQ397M", "TR724A", "TS258K", "TT639Z", "TU357M", "TV728A", "TW263K", "TX597Z", "TY328M", "TZ756A", "U2835Z", "U3679M", "U4258A", "U5732K", "U6829Z", "U7356M", "U8527A", "UA369K", "UB725Z", "UC283M", "UD537A", "UE826K", "UF395Z", "UG728M", "UH263A", "UJ597K", "UK328Z", "UL756M", "UM283A", "UN635K", "UP397Z", "UQ724M", "UR258A", "US639K", "UT357Z", "UU728M", "UV263A", "UW597K", "UX328Z", "UY756M", "UZ283A", "V2639K", "V3752Z", "V4286M", "V5739A", "V6825K", "V7368Z", "V8523M", "VA579A", "VB362K", "VC725Z", "VD283M", "VE537A", "VF826K", "VG395Z", "VH728M", "VJ263A", "VK597K", "VL328Z", "VM756M", "VN283A", "VP635K", "VQ397Z", "VR724M", "VS258A", "VT639K", "VU357Z", "VV728M", "VW263A", "VX597K", "VY328Z", "VZ756M", "W2835A", "W3679K", "W4258Z", "W5732M", "W6829A", "W7356K", "W8527Z", "WA369M", "WB725A", "WC283K", "WD537Z", "WE826M", "WF395A", "WG728K", "WH263Z", "WJ597M", "WK328A", "WL756K", "WM283Z", "WN635M", "WP397A", "WQ724K", "WR258Z", "WS8V28", "WSYNTD", "WUBHB5", "WMEUE3", "WO846W", "X51VPY", "X67CXA", "XB9OMV", "XC7FCC", "XDY12B", "XGZT97", "XLADUF", "XM7J2M", "XNIWQS", "XO2O3C", "XS1Q1S", "XY2VSN", "XYI96V", "Y0W3TE", "Y4WUQN", "Y6Z10Z", "Y7KL3K", "Y8JM9O", "YB6N1H", "YBCX4V", "YI247K", "YJF5R5", "YJMI9Q", "YLY0PZ", "YRYE38", "YSR3GI", "YST39C", "YXYCN6", "Z06KPG", "Z8IL68", "ZDKFVQ", "ZI7XQL", "ZJBX7O", "ZJOM1J", "ZKYBFN", "ZLJRE3", "ZOIO80", "ZVHGAT", "ZWAJJ0", "ZXVBVU", "ZYDP46", "ZYNMYS", "ZYW8A1", "ZZBFK0"];

  // Cookie名称、有效期7天
  const COOKIE_NAME = "site_auth";
  const COOKIE_EXPIRE_DAY = 7;
  // ------------------------------------------------------------

  // 读取Cookie
  const cookieHeader = request.headers.get("cookie") || "";
  const hasAuthCookie = cookieHeader.includes(`${COOKIE_NAME}=ok`);

  // 如果已经有合法Cookie，直接放行访问页面
  if (hasAuthCookie) {
    return await next();
  }

  // POST提交表单（用户输入卡密提交）
  if (request.method === "POST") {
    const formData = await request.formData();
    const inputKey = formData.get("access_key");

    if (validKeys.includes(inputKey)) {
      // 卡密正确，下发认证Cookie，7天免验证
      const resp = await next();
      const newResp = new Response(resp.body, resp);
      newResp.headers.append(
        "Set-Cookie",
        `${COOKIE_NAME}=ok; Path=/; HttpOnly; Max-Age=${COOKIE_EXPIRE_DAY * 24 * 60 * 60}; SameSite=Lax`
      );
      return newResp;
    }else{
      // 卡密错误，返回提示
      return new Response(`<html><body style="text-align:center;margin-top:100px;font-size:22px;color:red">❌ 卡密错误，请重新输入！<br><a href="/">返回</a></body></html>`, {
        headers: { "Content-Type": "text/html" }
      })
    }
  }

  // GET访问：弹出卡密输入表单
  return new Response(`
  <html>
  <head>
    <meta charset="UTF-8">
    <title>请输入访问卡密</title>
  </head>
  <body style="text-align:center;margin-top:120px;font-size:20px">
    <h3>🔐 访问验证</h3>
    <form method="POST">
      <input name="access_key" placeholder="输入6位卡密" required style="padding:8px;font-size:18px;width:220px">
      <br><br>
      <button type="submit" style="padding:8px 20px;font-size:18px">提交验证</button>
    </form>
  </body>
  </html>
  `, {
    headers: { "Content-Type": "text/html" }
  });
}
