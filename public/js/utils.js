"use strict";

(function (_0x454955, _0x3ee386) {
  const _0x6be637 = _0x5b61,
    _0xa967a9 = _0x454955();
  while (!![]) {
    try {
      const _0x143215 =
        -parseInt(_0x6be637(0x17c)) / (0x885 * -0x4 + -0x72a * 0x5 + 0x45e7) +
        parseInt(_0x6be637(0xfc)) / (0x16b4 + -0xd * 0x227 + 0x549) +
        (parseInt(_0x6be637(0x11d)) / (0x22e0 + -0x8eb * 0x3 + -0x81c)) * (parseInt(_0x6be637(0x132)) / (0x41d * 0x9 + -0x12d8 + 0x1229 * -0x1)) +
        -parseInt(_0x6be637(0x181)) / (-0xca1 * -0x2 + 0x2 * -0xe73 + 0x3a9) +
        parseInt(_0x6be637(0x14e)) / (-0x23ff + 0x1b7b + -0x88a * -0x1) +
        parseInt(_0x6be637(0x177)) / (-0x1f04 + -0x2444 + -0x434f * -0x1) +
        (-parseInt(_0x6be637(0xe8)) / (0x1a5f + -0xd3a + -0xd1d * 0x1)) * (parseInt(_0x6be637(0x159)) / (0x1 * -0x1d23 + 0xa9c + -0x63 * -0x30));
      if (_0x143215 === _0x3ee386) break;
      else _0xa967a9["push"](_0xa967a9["shift"]());
    } catch (_0x330d3e) {
      _0xa967a9["push"](_0xa967a9["shift"]());
    }
  }
})(_0x40be, -0x5 * -0x1eab2 + 0x8f322 + -0x30aee * 0x3);
const getElementBy = (_0x506aa0) => {
    const _0x57b2bc = _0x5b61;
    return document[_0x57b2bc(0x17f)](_0x506aa0);
  },
  getElementsBy = (_0xad81dd) => {
    const _0x29ee83 = _0x5b61;
    return document[_0x29ee83(0x15a)](_0xad81dd);
  },
  getElementValue = (_0x1d814f) => {
    const _0x1c48bd = _0x5b61;
    return getElementBy(_0x1d814f)[_0x1c48bd(0x162)];
  },
  getDate = (_0x52928f) => {
    return getElementBy(_0x52928f)["valueAsDate"];
  },
  getDisplayStyle = (_0x1af139) => {
    const _0x3194b0 = _0x5b61;
    return getElementBy(_0x1af139)[_0x3194b0(0x135)][_0x3194b0(0x188)];
  },
  setElementValue = (_0x2b7329, _0x33aef3) => {
    return (getElementBy(_0x2b7329)["value"] = _0x33aef3);
  },
  setText = (_0x1f924d, _0xd7176b) => {
    const _0x2cbbb8 = _0x5b61;
    return (getElementBy(_0x1f924d)[_0x2cbbb8(0x144)] = _0xd7176b);
  },
  setDisplayStyle = (_0x229b58, _0x4211bc) => {
    const _0x523eb6 = _0x5b61;
    return (getElementBy(_0x229b58)[_0x523eb6(0x135)][_0x523eb6(0x188)] = _0x4211bc);
  },
  addElementValue = (_0x444149, _0x4e8d8d) => {
    const _0x1ed72f = _0x5b61;
    return (getElementBy(_0x444149)[_0x1ed72f(0x162)] += _0x4e8d8d);
  },
  handleEventListener = (_0x443a55, _0x5ee9c1, _0x4a49c9) => {
    const _0x46dcd9 = _0x5b61;
    return getElementBy(_0x443a55)[_0x46dcd9(0x15e)](_0x5ee9c1, _0x4a49c9);
  },
  handleEventListeners = (_0x16a792, _0x510b57, _0x527b80) => {
    const _0x544102 = _0x5b61;
    return getElementsBy(_0x16a792)[_0x544102(0x11a)]((_0x5af3cf) => _0x5af3cf[_0x544102(0x15e)](_0x510b57, _0x527b80));
  },
  insertItemHTML = (_0x5eb3b2, _0x3dc978) => {
    const _0x1ae5d4 = _0x5b61;
    return getElementBy(_0x5eb3b2)[_0x1ae5d4(0xe1)]("beforeend", _0x3dc978);
  },
  changeClass = (_0x40f652, _0x3a3974, _0x506833) => {
    removeClass(_0x40f652, _0x3a3974), setClass(_0x40f652, _0x506833);
  },
  setClass = (_0x7c7704, _0x438725) => {
    const _0x18a394 = _0x5b61;
    return getElementBy(_0x7c7704)[_0x18a394(0x16f)][_0x18a394(0x106)](_0x438725);
  },
  removeClass = (_0x1ef00b, _0x501eb8) => {
    const _0x34dfc1 = _0x5b61;
    return getElementBy(_0x1ef00b)["classList"][_0x34dfc1(0x16a)](_0x501eb8);
  };
(function hideRoute() {
  const _0x2b09ca = _0x5b61;
  if (history[_0x2b09ca(0x165)]) {
    const _0x4e8850 = window[_0x2b09ca(0xf7)][_0x2b09ca(0x137)] + "//" + window[_0x2b09ca(0xf7)][_0x2b09ca(0x110)] + window["location"]["pathname"],
      _0x613faa = {};
    return (_0x613faa[_0x2b09ca(0x113)] = _0x4e8850), window[_0x2b09ca(0x139)]["pushState"](_0x613faa, "", _0x4e8850);
  }
})();
function _0x5b61(_0x7814ef, _0x1c2772) {
  const _0x2aba8f = _0x40be();
  return (
    (_0x5b61 = function (_0x31b253, _0x1fcc78) {
      _0x31b253 = _0x31b253 - (-0xfc2 * 0x1 + 0x200e + 0x3 * -0x525);
      let _0x78150d = _0x2aba8f[_0x31b253];
      return _0x78150d;
    }),
    _0x5b61(_0x7814ef, _0x1c2772)
  );
}
const checkingInputFulfillment = (_0x3bb096, _0x5ad343, _0x4bea3b, _0x185790) => {
    return getElementValue(_0x3bb096) == ""
      ? !![]
      : getElementValue(_0x5ad343) == ""
      ? !![]
      : getElementValue(_0x4bea3b) == ""
      ? !![]
      : getElementValue(_0x185790) == ""
      ? !![]
      : ![];
  },
  handleAlertMsg = (_0x601270) => {
    const _0x43d48e = _0x5b61;
    setDisplayStyle(_0x601270, "block"),
      setDisplayStyle(_0x43d48e(0x16c), _0x43d48e(0x173)),
      handleEventListeners(_0x43d48e(0x169), _0x43d48e(0x10e), () => {
        const _0x5c6e09 = _0x43d48e;
        setDisplayStyle(_0x601270, _0x5c6e09(0x173)), setDisplayStyle("#full-form", "block");
      });
  },
  handlePeselCheck = () => {
    const _0x5ab09d = _0x5b61;
    setDisplayStyle(_0x5ab09d(0x13f), _0x5ab09d(0x173)),
      setDisplayStyle("#form-printable", "block"),
      setDisplayStyle(_0x5ab09d(0x195), _0x5ab09d(0x115)),
      getElementBy(_0x5ab09d(0xf4))[_0x5ab09d(0x112)]();
  },
  handleSectionVisibilityAndAutofill = (_0x3fbb9e, _0x28aec8, _0x56e067, _0x483e36) => {
    const _0xeb4e56 = _0x5b61;
    _0x483e36
      ? (setElementValue(_0x3fbb9e, _0x28aec8), removeClass(_0x56e067, "invisible"))
      : (setElementValue(_0x3fbb9e, _0x28aec8), setClass(_0x56e067, _0xeb4e56(0x123)));
  },
  displaySubsidy = (_0x104204) => {
    const _0x356a63 = _0x5b61,
      _0x3c7db7 = [-0xd05 + -0x20ec + 0x35 * 0xed, -0xa76 * -0x3 + -0x16 * 0x167 + 0x2 * 0x197, -0xc * 0x16c + -0x1 * -0x14ce + 0x8e],
      _0x3efdcb = [
        0x2073 * -0x1 + 0x1328 * -0x1 + -0x1 * -0x3976,
        0x4cd + 0x2331 + 0x1111 * -0x2,
        0x500 + 0xaa9 * -0x1 + -0x1 * -0xd78,
        0x1d4f + 0x1653 + -0x2bd2,
      ];
    if (Math[_0x356a63(0x154)](_0x104204["target"]["value"]) <= _0x3efdcb[-0x7b + 0x1945 + -0x18ca])
      setElementValue(_0x356a63(0x192), _0x3c7db7[0x1353 + 0xf * 0x57 + -0x2 * 0xc35]);
    else {
      if (
        (Math["round"](_0x104204[_0x356a63(0x16e)][_0x356a63(0x162)]) >= _0x3efdcb[0x1 * -0x2397 + -0x312 * 0x8 + 0x3c28]) &
        (Math["round"](_0x104204[_0x356a63(0x16e)][_0x356a63(0x162)]) <= _0x3efdcb[-0x7e + 0x2e * 0x4d + 0x472 * -0x3])
      )
        setElementValue(_0x356a63(0x192), _0x3c7db7[0x76 * -0x3e + -0x61f * 0x2 + 0x28d3]);
      else {
        if (Math[_0x356a63(0x154)](_0x104204[_0x356a63(0x16e)][_0x356a63(0x162)]) >= _0x3efdcb[-0x23fb + -0x1813 + 0x3c11])
          setElementValue("#application-value", _0x3c7db7[-0x6 * 0x25f + -0x2558 + 0x3392]);
      }
    }
    if (_0x104204[_0x356a63(0x16e)][_0x356a63(0x162)] == "") setElementValue(_0x356a63(0x192), "");
  },
  hideOwnSection = (_0x8647b4) => {
    const _0x1dd374 = _0x5b61;
    _0x8647b4[_0x1dd374(0x16e)]["checked"]
      ? handleSectionVisibilityAndAutofill(_0x1dd374(0x168), _0x1dd374(0x138), _0x1dd374(0x147), ![])
      : handleSectionVisibilityAndAutofill(_0x1dd374(0x168), "", _0x1dd374(0x147), !![]);
  },
  hideKidsSection = (_0x42f1b7) => {
    const _0x19af26 = _0x5b61;
    _0x42f1b7[_0x19af26(0x16e)]["checked"]
      ? handleSectionVisibilityAndAutofill(
          _0x19af26(0x168),
          "FDK.KS.1620/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/2022",
          _0x19af26(0x12e),
          ![]
        )
      : handleSectionVisibilityAndAutofill(_0x19af26(0x168), "", "#application-kids-div", !![]);
  },
  showKidsQuantitySection = (_0x3798bc) => {
    const _0x58de6a = _0x5b61;
    if (_0x3798bc[_0x58de6a(0x16e)]["checked"]) removeClass(_0x58de6a(0x17b), _0x58de6a(0x123));
    else setClass(_0x58de6a(0x17b), "invisible");
  },
  handleIndividualInputs = (_0x2ca05a) => {
    const _0x3fd90d = _0x5b61;
    setElementValue("#id", _0x2ca05a[_0x3fd90d(0x148)]),
      setElementValue(_0x3fd90d(0x170), _0x2ca05a[_0x3fd90d(0x179)] + "\x20" + _0x2ca05a[_0x3fd90d(0x161)]),
      setElementValue(_0x3fd90d(0xee), _0x2ca05a[_0x3fd90d(0xe0)]);
  },
  generatePDF = () => {
    const _0x6e4a84 = _0x5b61;
    return html2canvas(document[_0x6e4a84(0x107)](_0x6e4a84(0x129)))[_0x6e4a84(0x191)](function (_0x417e56) {
      const _0x34871e = _0x6e4a84,
        _0x915aae = _0x417e56[_0x34871e(0xf9)](_0x34871e(0x17d)),
        _0x1820e9 = 0xb6b + -0xa6 * 0x17 + 0x451,
        _0x254f4c = -0x5 * -0x2ce + 0x3 * 0x766 + 0x1 * -0x230f,
        _0x14f7af = (_0x417e56[_0x34871e(0xf0)] * _0x1820e9) / _0x417e56["width"],
        _0x4da2ba = new jspdf["jsPDF"]("p", "mm"),
        _0x3bfbf4 = -0x1d7e + 0x1435 + -0x1 * -0x949;
      _0x4da2ba["addImage"](_0x915aae, _0x34871e(0x146), 0x247e + -0x6d * 0x2a + -0x129c, _0x3bfbf4, _0x1820e9, _0x14f7af),
        _0x4da2ba[_0x34871e(0xf2)]("wniosek_o_dofinansowanie.pdf");
    });
  },
  handleGeneratePDF = (_0x1e26f0) => {
    const _0x9d06b6 = _0x5b61;
    _0x1e26f0[_0x9d06b6(0x190)]();
    if (checkingInputFulfillment(_0x9d06b6(0x170), "#unit", _0x9d06b6(0x13b), _0x9d06b6(0x186))) handleAlertMsg(_0x9d06b6(0xfd));
    else {
      if (!getElementBy(_0x9d06b6(0x101))[_0x9d06b6(0x153)] & !getElementBy(_0x9d06b6(0x12f))["checked"]) handleAlertMsg(_0x9d06b6(0x143));
      else {
        if (
          getElementBy("#statement-kids")[_0x9d06b6(0x153)] &
          (getElementBy(_0x9d06b6(0x122))[_0x9d06b6(0x162)] == ("" || -0x1b0b + 0x130e + 0x7fd * 0x1))
        )
          handleAlertMsg(_0x9d06b6(0xe9));
        else {
          if (getElementBy(_0x9d06b6(0x12f))["checked"]) {
            if (getElementBy(_0x9d06b6(0xf6))[_0x9d06b6(0x162)] == "" || getElementBy(_0x9d06b6(0x127))[_0x9d06b6(0x162)] == "")
              handleAlertMsg("#alert-kids");
            else {
              if (getElementBy(_0x9d06b6(0x12f))[_0x9d06b6(0x153)] & !getElementBy(_0x9d06b6(0x17a))[_0x9d06b6(0x153)])
                handleAlertMsg(_0x9d06b6(0x15f));
              else generatePDF();
            }
          } else generatePDF();
        }
      }
    }
  },
  fetchPersonData = (_0x152868) => {
    const _0x50402b = _0x5b61;
    _0x152868[_0x50402b(0x190)](), handlePeselCheck();
    const _0x1df305 = {};
    (_0x1df305[_0x50402b(0x14d)] = _0x50402b(0x125)),
      (_0x1df305["month"] = _0x50402b(0x125)),
      (_0x1df305[_0x50402b(0x13a)] = "numeric"),
      setElementValue(_0x50402b(0x186), new Date()[_0x50402b(0x124)]("pl-PL", _0x1df305));
    if (!getElementValue(_0x50402b(0x14a)) || !getElementValue(_0x50402b(0xeb)) || !getElementValue("#lastThree")) return;
    fetchData(
      _0x50402b(0x118) +
        (getElementValue(_0x50402b(0x14a))[_0x50402b(0xec)]() +
          getElementValue(_0x50402b(0xeb))[_0x50402b(0xec)]() +
          getElementValue(_0x50402b(0x15d))[_0x50402b(0xec)]()),
      (_0x25a721) => {
        handleIndividualInputs(_0x25a721);
      }
    );
  },
  handleApplication = () => {
    const _0x45ce42 = _0x5b61,
      _0x1ec5f8 = {};
    (_0x1ec5f8[_0x45ce42(0x183)] = _0x45ce42(0x184)),
      getElementBy(_0x45ce42(0x13f))[_0x45ce42(0x112)](_0x1ec5f8),
      handleEventListener(_0x45ce42(0x18e), _0x45ce42(0x10e), fetchPersonData),
      handleEventListener(_0x45ce42(0x195), _0x45ce42(0x10e), handleGeneratePDF),
      handleEventListener("#application-own", _0x45ce42(0x10e), hideKidsSection),
      handleEventListener(_0x45ce42(0x12f), _0x45ce42(0x10e), hideOwnSection),
      handleEventListener(_0x45ce42(0x17a), _0x45ce42(0x10e), showKidsQuantitySection),
      handleEventListener(_0x45ce42(0x13b), _0x45ce42(0x152), displaySubsidy);
  },
  handleFulfillment = (_0x5d7ea7, _0x273901) => {
    _0x273901 && displayDismissMsg(_0x5d7ea7);
  },
  displaySection = () => {
    const _0x225972 = _0x5b61,
      _0x5416a2 = {};
    (_0x5416a2[_0x225972(0x183)] = _0x225972(0x184)),
      getElementBy("h3")[_0x225972(0x112)](_0x5416a2),
      handleEventListener(_0x225972(0x189), _0x225972(0x10e), handleFaq);
  },
  displayDismissMsg = (_0x48c325) => {
    const _0x10070c = _0x5b61;
    setDisplayStyle(_0x10070c(0x178), _0x10070c(0x115)), setDisplayStyle(_0x10070c(0x14c), _0x10070c(0x173)), _0x48c325["preventDefault"]();
  },
  handleFaq = (_0x52d779) => {
    const _0x52e71f = _0x5b61,
      _0x47aeef = _0x52d779["target"]["id"][_0x52e71f(0x13e)]("-"),
      _0x4b76f6 = _0x47aeef[_0x47aeef[_0x52e71f(0xff)] - (0x20e0 + -0x174c + -0x81 * 0x13)];
    if (_0x52d779[_0x52e71f(0x16e)]["classList"][0xcf3 + 0x20bc + -0x923 * 0x5] == _0x52e71f(0x12a)) {
      if (getDisplayStyle(_0x52e71f(0x12b) + _0x4b76f6) == _0x52e71f(0x173))
        setDisplayStyle(_0x52e71f(0x12b) + _0x4b76f6, _0x52e71f(0x115)), setText(_0x52e71f(0x102) + _0x4b76f6, _0x52e71f(0x119));
      else
        getDisplayStyle(_0x52e71f(0x12b) + _0x4b76f6) == _0x52e71f(0x115) &&
          (setDisplayStyle(_0x52e71f(0x12b) + _0x4b76f6, "none"), setText(_0x52e71f(0x102) + _0x4b76f6, "POKAŻ\x20ODPOWIEDŹ"));
    }
  },
  sortArticles = (_0x1fa053) => {
    const _0xd10f2a = _0x5b61;
    let _0x25c855 = _0x1fa053[_0xd10f2a(0x163)]((_0x2bf092, _0x434bd1) => {
      const _0x4f012f = _0xd10f2a;
      let _0xbf811a = new Date(_0x2bf092[_0x4f012f(0x104)]),
        _0x25e6ed = new Date(_0x434bd1[_0x4f012f(0x104)]);
      return _0x25e6ed - _0xbf811a;
    });
    return _0x25c855;
  },
  renderNews = (_0x2d3df8, _0x12cd1a) => {
    const _0x100f88 = _0x5b61;
    sortArticles(_0x2d3df8)[_0x100f88(0x11a)]((_0x4ab4b1) => {
      const _0x705ca2 = _0x100f88;
      insertItemHTML(_0x705ca2(0x140), _0x12cd1a(_0x4ab4b1));
    });
  },
  getContentHTML = (_0x544407) => {
    const _0x1fea00 = _0x5b61;
    return "" + _0x544407[_0x1fea00(0x172)][_0x1fea00(0x13e)]("\x0a")["join"]("<br\x20/>");
  },
  getLastNewsHTML = (_0x188d48) => {
    const _0x27babb = _0x5b61,
      _0x368eb5 = {};
    return (
      (_0x368eb5[_0x27babb(0x105)] = _0x27babb(0xf1)),
      (_0x368eb5[_0x27babb(0x14d)] = _0x27babb(0x125)),
      (_0x368eb5[_0x27babb(0x164)] = "long"),
      (_0x368eb5[_0x27babb(0x13a)] = _0x27babb(0x125)),
      _0x27babb(0x12c) +
        _0x188d48["_id"] +
        _0x27babb(0xfb) +
        new Date(_0x188d48[_0x27babb(0x104)])[_0x27babb(0x124)]("pl-PL", _0x368eb5) +
        _0x27babb(0x14f) +
        _0x188d48[_0x27babb(0xf5)] +
        _0x27babb(0x155) +
        _0x188d48[_0x27babb(0x100)] +
        _0x27babb(0x14b)
    );
  },
  getNewsHTML = (_0x5d7dee) => {
    const _0x1a6491 = _0x5b61,
      _0xd216d9 = {};
    return (
      (_0xd216d9[_0x1a6491(0x105)] = _0x1a6491(0xf1)),
      (_0xd216d9[_0x1a6491(0x14d)] = "numeric"),
      (_0xd216d9[_0x1a6491(0x164)] = _0x1a6491(0xf1)),
      (_0xd216d9[_0x1a6491(0x13a)] = _0x1a6491(0x125)),
      _0x1a6491(0x12c) +
        _0x5d7dee[_0x1a6491(0xfe)] +
        _0x1a6491(0x126) +
        _0x5d7dee["title"] +
        _0x1a6491(0x149) +
        _0x5d7dee[_0x1a6491(0x100)] +
        _0x1a6491(0xe4) +
        new Date(_0x5d7dee[_0x1a6491(0x104)])["toLocaleString"](_0x1a6491(0x160), _0xd216d9) +
        "</p></a>"
    );
  },
  getNewsContent = (_0x460b84, _0x5694da) => {
    const _0x2f85fb = _0x5b61;
    return fetchData(_0x2f85fb(0x180), (_0xcbbdd2) => {
      if (_0x5694da) _0x460b84(sortArticles(_0xcbbdd2)[0x8 * -0x404 + -0x14e3 + 0x3503]);
      else _0x460b84(_0xcbbdd2);
    });
  },
  getNewsList = (_0x5962bc, _0x3683fe) => {
    const _0x5a1c15 = _0x5b61;
    return fetchData(_0x5a1c15(0x180), (_0x3cf1e3) => {
      _0x5962bc(_0x3cf1e3, _0x3683fe);
    });
  },
  renderContent = (_0x1356f6) => {
    const _0x48a90d = _0x5b61;
    _0x1356f6[_0x48a90d(0x11a)]((_0x4c75d2, _0x12d472) => {
      const _0x429835 = _0x48a90d;
      if (_0x1356f6[_0x12d472][_0x429835(0xfe)] == getElementBy(_0x429835(0x18a))["id"])
        return insertItemHTML(".font-weight-bold", getContentHTML(_0x1356f6[_0x12d472]));
    });
  },
  renderLastNews = (_0xc029b1) => {
    const _0x4a80e2 = _0x5b61;
    insertItemHTML(_0x4a80e2(0x18f), getLastNewsHTML(_0xc029b1));
  },
  insertLink = (_0x3be243, _0x207018, _0x5216a6) => {
    const _0x17262f = _0x5b61;
    return addElementValue(_0x3be243, "<a\x20href=" + _0x207018 + ">" + _0x5216a6 + _0x17262f(0xdf));
  },
  insertImg = (_0x378e7f, _0x87495b, _0x1e1fb7) => {
    const _0x34e288 = _0x5b61;
    return addElementValue(_0x378e7f, _0x34e288(0x17e) + _0x87495b + _0x34e288(0x11b) + _0x1e1fb7 + "\x20class=img-fluid>");
  },
  insertVideo = (_0x34a154, _0x121eda, _0x355960) => {
    const _0x280ec1 = _0x5b61;
    return addElementValue(_0x34a154, _0x280ec1(0x131) + _0x121eda + _0x280ec1(0x11b) + _0x355960 + _0x280ec1(0x157));
  },
  insertBold = (_0x597ae1) => {
    const _0x57284e = _0x5b61;
    return addElementValue(_0x597ae1, _0x57284e(0xe3));
  },
  insertEmphasize = (_0x44bb2d) => {
    const _0x57b811 = _0x5b61;
    return addElementValue(_0x44bb2d, _0x57b811(0xe6));
  },
  insertColorAndBold = (_0x1f5e2a) => {
    const _0x25556c = _0x5b61;
    return addElementValue(_0x1f5e2a, _0x25556c(0xea));
  },
  insertAttachment = (_0x1405b8) => {
    const _0x464ba6 = _0x5b61;
    getElementBy(_0x464ba6(0x134))[_0x464ba6(0x16f)][_0x464ba6(0x10d)](_0x464ba6(0x10c)) &&
      (insertLink(_0x1405b8, getElementValue("#source-link"), getElementValue(_0x464ba6(0x15c))), removeClass(_0x464ba6(0x134), _0x464ba6(0x10c))),
      getElementBy("#insert")["classList"][_0x464ba6(0x10d)](_0x464ba6(0x145)) &&
        (insertImg(_0x1405b8, getElementValue("#source-link"), getElementValue(_0x464ba6(0x15c))), removeClass("#insert", _0x464ba6(0x145))),
      getElementBy(_0x464ba6(0x134))["classList"]["contains"](_0x464ba6(0xfa)) &&
        (insertVideo(_0x1405b8, getElementValue(_0x464ba6(0x151)), getElementValue(_0x464ba6(0x15c))),
        removeClass(_0x464ba6(0x134), _0x464ba6(0xfa)));
  },
  handleInputUtlis = (_0x5926cf, _0x165e80) => {
    return handleEventListener("." + _0x5926cf, "click", (_0xc10e92) => {
      const _0x1c4af0 = _0x5b61;
      _0xc10e92[_0x1c4af0(0x133)](), _0xc10e92[_0x1c4af0(0x190)]();
      if (_0x5926cf[_0x1c4af0(0x16d)](_0x1c4af0(0x120))) return insertBold(_0x165e80);
      if (_0x5926cf[_0x1c4af0(0x16d)](_0x1c4af0(0x13d))) return insertEmphasize(_0x165e80);
      if (_0x5926cf[_0x1c4af0(0x16d)](_0x1c4af0(0x117))) return insertColorAndBold(_0x165e80);
      setClass(_0x1c4af0(0x134), _0x5926cf[_0x1c4af0(0x13e)]("-")[-0xce3 * -0x2 + 0x874 + -0x1 * 0x223a]),
        changeClass(_0x1c4af0(0x134), "d-none", _0x1c4af0(0x109)),
        getElementsBy(_0x1c4af0(0x128))[_0x1c4af0(0x11a)]((_0x10c7a8) => (_0x10c7a8[_0x1c4af0(0x135)]["display"] = _0x1c4af0(0x173))),
        setText(_0x1c4af0(0x13c), _0x1c4af0(0x11f) + _0x5926cf[_0x1c4af0(0x13e)]("-")[0x9e4 + -0x10a * 0x5 + 0x259 * -0x2]);
    });
  },
  resetInputLink = () => {
    const _0x3dbe1d = _0x5b61;
    setElementValue("#source-link", ""), setElementValue(_0x3dbe1d(0x15c), "");
  },
  handleSubmitBtn = (_0x31cd15) => {
    const _0x1f62a2 = _0x5b61;
    handleEventListener(_0x1f62a2(0xdd), "click", (_0x16fae2) => {
      const _0x21321a = _0x1f62a2;
      checkingInputFulfillment("#title", "#news", _0x21321a(0xed), _0x21321a(0x150))
        ? handleAlertMsg("#alert-admin")
        : (sendData("/dodaj/" + _0x31cd15 + _0x21321a(0x18c), {
            content: new News(
              getElementValue(_0x21321a(0x166)),
              getElementValue(_0x21321a(0x130)),
              getDate(_0x21321a(0xed)),
              getElementValue(_0x21321a(0x150))
            ),
          }),
          (getElementBy(_0x21321a(0xdd))[_0x21321a(0x142)] = "/sukces"));
    });
  },
  getDeleteNewsHTML = (_0x1b79e9) => {
    const _0x241ddc = _0x5b61;
    return (
      _0x241ddc(0x182) +
      _0x1b79e9[_0x241ddc(0xfe)] +
      _0x241ddc(0x175) +
      _0x1b79e9[_0x241ddc(0xf5)] +
      _0x241ddc(0x194) +
      _0x1b79e9["_id"] +
      _0x241ddc(0x18b) +
      _0x1b79e9[_0x241ddc(0xfe)] +
      _0x241ddc(0x116) +
      _0x1b79e9["content"] +
      _0x241ddc(0xe5) +
      _0x1b79e9[_0x241ddc(0xfe)] +
      _0x241ddc(0x171) +
      insertEditButtons(_0x1b79e9) +
      _0x241ddc(0x141)
    );
  },
  insertEditButtons = (_0x49dd47) => {
    const _0x4aec32 = _0x5b61;
    return (
      "<div\x20class=\x22buttons\x20form\x22\x20id=\x22buttons-" +
      _0x49dd47[_0x4aec32(0xfe)] +
      _0x4aec32(0x187) +
      _0x49dd47["_id"] +
      "\x22\x20class=\x22btn\x20btn-outline-secondary\x20obraz-" +
      _0x49dd47[_0x4aec32(0xfe)] +
      _0x4aec32(0x156) +
      _0x49dd47[_0x4aec32(0xfe)] +
      "\x22\x20class=\x22btn\x20btn-outline-secondary\x20video-" +
      _0x49dd47["_id"] +
      _0x4aec32(0x176) +
      _0x49dd47["_id"] +
      _0x4aec32(0x185) +
      _0x49dd47[_0x4aec32(0xfe)] +
      _0x4aec32(0x12d) +
      _0x49dd47["_id"] +
      _0x4aec32(0x193) +
      _0x49dd47[_0x4aec32(0xfe)] +
      _0x4aec32(0x121) +
      _0x49dd47[_0x4aec32(0xfe)] +
      _0x4aec32(0x11e) +
      _0x49dd47[_0x4aec32(0xfe)] +
      "\x20mb-3\x20me-3\x22\x20type=\x22button\x22\x20style=\x22width:\x20150px;\x22>Pochyl</button><button\x20id=\x22" +
      _0x49dd47[_0x4aec32(0xfe)] +
      "\x22\x20class=\x22btn\x20btn-outline-secondary\x20color-" +
      _0x49dd47[_0x4aec32(0xfe)] +
      _0x4aec32(0xe7)
    );
  },
  handleNewsButtons = (_0xe859cb, _0x2131e7, _0x9e5de7) => {
    const _0x5395f1 = _0x5b61,
      _0x4ef9fe = [_0x5395f1(0x10c), _0x5395f1(0x145), _0x5395f1(0xfa), "bold", _0x5395f1(0x13d), _0x5395f1(0x117)];
    _0x4ef9fe[_0x5395f1(0xef)]((_0x55108a) => {
      handleInputUtlis(
        "" + (_0xe859cb ? _0x55108a + "-" + _0x2131e7 : "" + _0x55108a),
        "" + (_0xe859cb ? _0x9e5de7 + "-" + _0x2131e7 : "" + _0x9e5de7)
      );
    });
  },
  handleExternalLinkButton = (_0x55b6aa) => {
    const _0x3767f8 = _0x5b61;
    handleEventListener(_0x3767f8(0x13c), "click", (_0x17b758) => {
      const _0x1e14cc = _0x3767f8;
      _0x17b758[_0x1e14cc(0x133)](),
        insertAttachment(_0x55b6aa),
        getElementsBy(".form")[_0x1e14cc(0x11a)]((_0x5e65bf) => (_0x5e65bf[_0x1e14cc(0x135)][_0x1e14cc(0x188)] = null)),
        _0x55b6aa[_0x1e14cc(0x13e)]("-")[-0x1 * -0x188a + 0x1 * -0x13c3 + -0x4c7] == "#update" &&
          getElementsBy(_0x1e14cc(0x136))[_0x1e14cc(0x11a)]((_0x494cf9) => (_0x494cf9[_0x1e14cc(0x135)][_0x1e14cc(0x188)] = _0x1e14cc(0x173))),
        changeClass(_0x1e14cc(0x134), "d-grid", _0x1e14cc(0x16b)),
        resetInputLink();
    });
  },
  handleDisplayButtonsMenu = (_0x257f1f, _0x3a1d71) => {
    const _0x1449e5 = _0x5b61;
    return getElementsBy(_0x257f1f)[_0x1449e5(0x11a)]((_0x29f2f7) => {
      const _0x47d10a = _0x1449e5;
      if (_0x29f2f7["id"][_0x47d10a(0x13e)]("-")[0x89 * 0xa + 0xf16 + 0x1 * -0x146f] == _0x3a1d71) {
        if (getDisplayStyle("#" + _0x29f2f7["id"]) == "" || getDisplayStyle("#" + _0x29f2f7["id"]) == _0x47d10a(0x173))
          setDisplayStyle("#" + _0x29f2f7["id"], _0x47d10a(0x115));
        else setDisplayStyle("#" + _0x29f2f7["id"], _0x47d10a(0x173));
      } else setDisplayStyle("#" + _0x29f2f7["id"], "none");
    });
  },
  deleteNews = (_0x47e34b) => {
    const _0x1199a7 = _0x5b61;
    deleteData(_0x1199a7(0xf8), _0x47e34b[_0x1199a7(0x16e)]["id"]), window[_0x1199a7(0xf7)]["reload"]();
  },
  updateNews = (_0x442355) => {
    const _0x5069be = _0x5b61;
    updateData(
      _0x5069be(0x174),
      _0x442355[_0x5069be(0x16e)]["id"],
      getElementBy(_0x5069be(0x103) + _0x442355[_0x5069be(0x16e)]["id"])[_0x5069be(0x162)]
    ),
      window[_0x5069be(0xf7)][_0x5069be(0x10b)]();
  },
  handleXls = async (_0x2720f3) => {
    const _0x270caf = _0x5b61,
      _0x4ff2f4 = _0x2720f3[_0x270caf(0x16e)]["files"][-0x1af * 0x3 + -0x12d6 + 0x5 * 0x4c7],
      _0x2ca6d4 = await _0x4ff2f4["arrayBuffer"](),
      _0x17426d = XLSX["readFile"](_0x2ca6d4),
      _0x484256 = XLSX[_0x270caf(0x18d)][_0x270caf(0x15b)](_0x17426d[_0x270caf(0xe2)][_0x17426d[_0x270caf(0x111)][0x194a + 0x21b9 + -0x3b03 * 0x1]]),
      _0x32207f = {};
    (_0x32207f[_0x270caf(0x172)] = _0x484256), sendData(_0x270caf(0xf3), _0x32207f);
  },
  authorize = () => {
    const _0x46bab9 = _0x5b61;
    let _0x10bd1a = [],
      _0x8e3fc3;
    window[_0x46bab9(0xf7)][_0x46bab9(0x167)] == _0x46bab9(0xde) || window[_0x46bab9(0xf7)]["pathname"] == _0x46bab9(0x114)
      ? ((_0x8e3fc3 = "get"), (_0x10bd1a = ["#fname", _0x46bab9(0xeb), _0x46bab9(0x15d), _0x46bab9(0x15d)]))
      : ((_0x8e3fc3 = "post"), (_0x10bd1a = [_0x46bab9(0x10f), "#password", _0x46bab9(0x10f), "#password"]));
    if (!getElementBy(_0x46bab9(0x108) + _0x8e3fc3)) return;
    handleEventListener(_0x46bab9(0x108) + _0x8e3fc3, _0x46bab9(0x10e), (_0x322556) => {
      handleFulfillment(
        _0x322556,
        checkingInputFulfillment(
          _0x10bd1a[-0x26bf + -0x2561 * 0x1 + -0xcb0 * -0x6],
          _0x10bd1a[-0x1d89 * 0x1 + -0x1243 + 0x2fcd],
          _0x10bd1a[-0x1 * 0xe03 + -0x3 * -0x634 + -0x497],
          _0x10bd1a[-0x1d9f + 0x2492 + -0x30 * 0x25]
        )
      );
    });
  },
  handleManagment = () => {
    const _0x2f14b6 = _0x5b61;
    let _0x2df219;
    handleEventListener(_0x2f14b6(0x140), _0x2f14b6(0x10e), (_0x539eb3) => {
      const _0x47396b = _0x2f14b6;
      _0x2df219 = _0x539eb3[_0x47396b(0x16e)]["id"][_0x47396b(0x13e)]("-")[0x1b9d * -0x1 + -0x1b90 + 0x372e];
      if (!_0x539eb3["target"]["id"]) return;
      if (_0x539eb3["target"][_0x47396b(0x16f)][_0x47396b(0x10a)](0xb16 + -0x2077 + 0x1561) == "update") return updateNews(_0x539eb3);
      if (_0x539eb3[_0x47396b(0x16e)][_0x47396b(0x16f)]["item"](0x1 * -0x3c4 + 0x2189 + -0x1dc5) == _0x47396b(0x11c)) return deleteNews(_0x539eb3);
      handleDisplayButtonsMenu(".buttons", _0x2df219),
        handleNewsButtons(!![], _0x2df219, _0x47396b(0x158)),
        handleExternalLinkButton(_0x47396b(0x103) + _0x2df219);
    });
  };
function _0x40be() {
  const _0x19b91b = [
    "long",
    "save",
    "/baza/access",
    "#form-container",
    "title",
    "#to-check-input-date",
    "location",
    "/zarzadzaj/news/usun",
    "toDataURL",
    "video",
    "\x22\x20class=\x22btn\x20btn-outline-secondary\x20col-md-10\x20col-lg-8\x20col-xl-12\x20mb-2\x20border\x20border-5\x20border-danger\x20rounded-3\x22><p\x20class=\x22text-center\x20m-1\x22\x20style=\x22font-size:15px;\x22\x22><em>",
    "964258CQkisz",
    "#alert-name-salary",
    "_id",
    "length",
    "description",
    "#application-own",
    "#show-btn-",
    "#update-",
    "date",
    "weekday",
    "add",
    "getElementById",
    "#check-btn-auth-",
    "d-grid",
    "item",
    "reload",
    "link",
    "contains",
    "click",
    "#password",
    "host",
    "SheetNames",
    "scrollIntoView",
    "path",
    "/regulamin-zasady-wnioski",
    "block",
    "\x22\x20class=\x22form-control\x22>",
    "color",
    "/wniosek/",
    "UKRYJ\x20ODPOWIEDŹ",
    "forEach",
    "\x20alt=",
    "delete",
    "90DwkLwE",
    "\x22\x20class=\x22btn\x20btn-outline-secondary\x20emphasize-",
    "Dodaj\x20",
    "bold",
    "\x20mb-3\x20me-3\x22\x20type=\x22button\x22\x20style=\x22width:\x20150px;\x22>Pogrubienie</button><button\x20id=\x22",
    "#statement-kids-quantity-input",
    "invisible",
    "toLocaleString",
    "numeric",
    "\x22\x20class=\x22btn\x20btn-outline-secondary\x20mb-2\x20text-center\x20rounded-3\x22>",
    "#to-check-input-name",
    ".form",
    "form-printable",
    "btn",
    "#faq-",
    "<a\x20href=\x22/news/",
    "\x20mb-3\x20me-3\x22\x20type=\x22button\x22\x20style=\x22width:\x20150px;\x22>Link</button><button\x20id=\x22",
    "#application-kids-div",
    "#application-kids",
    "#news",
    "<video\x20src=",
    "145108dJheXk",
    "stopImmediatePropagation",
    "#insert",
    "style",
    ".buttons",
    "protocol",
    "FDK.KS.1621/\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/2022",
    "history",
    "day",
    "#statement-salary",
    ".add-btn",
    "emphasize",
    "split",
    "#person-container",
    ".list-group",
    "</div>",
    "href",
    "#alert-purpose",
    "innerText",
    "obraz",
    "JPEG",
    "#application-own-div",
    "nrprac",
    "<p\x20class=\x22text-center\x20m-1\x22\x20style=\x22font-size:15px;\x22><em>Tematyka:\x20",
    "#fname",
    "</em></p>",
    "#message-container-get-auth",
    "year",
    "3235050cFNlRf",
    "</p><h3\x20class=\x22text-center\x22>",
    "#description",
    "#source-link",
    "input",
    "checked",
    "round",
    "</h3><p\x20class=\x22text-center\x20m-1\x22\x20style=\x22font-size:15px;\x22\x22>Tematyka:\x20",
    "\x20mb-3\x20me-3\x22\x20type=\x22button\x22\x20style=\x22width:\x20150px;\x22>Obraz</button><button\x20id=\x22",
    "\x20autoplay=\x22autoplay\x22\x20muted=\x22true\x22\x20loop=\x22true\x22\x20playsinline=\x22true\x22\x20width=\x22100%\x22></video>",
    "#update",
    "27198KxnzjI",
    "querySelectorAll",
    "sheet_to_row_object_array",
    "#source-title",
    "#lastThree",
    "addEventListener",
    "#alert-kids-camp",
    "pl-PL",
    "nazwisko",
    "value",
    "sort",
    "month",
    "pushState",
    "#title",
    "pathname",
    "#application-number",
    "#confirm-btn",
    "remove",
    "d-none",
    "#full-form",
    "includes",
    "target",
    "classList",
    "#name",
    "\x22\x20class=\x22update\x20btn\x20btn-outline-secondary\x22\x20type=\x22button\x22\x20style=\x22width:\x20100px;\x22>Edytuj</button>\x0a</div>",
    "content",
    "none",
    "/zarzadzaj/news/edytuj",
    "\x20px-4\x20px-lg-5\x20border\x20border-dark\x20pt-3\x20m-1\x20form\x22><div\x20class=\x22input-group\x20mb-3\x20form\x22>\x0a\x20\x20<input\x20type=\x22text\x22\x20class=\x22form-control\x22\x20value=\x22",
    "\x20mb-3\x20me-3\x22\x20type=\x22button\x22\x20style=\x22width:\x20150px;\x22>Video</button><button\x20id=\x22",
    "995995xoKnrn",
    "#message-container-dismiss-auth",
    "imie",
    "#statement-kids",
    "#statement-kids-quantity",
    "457443HBBaRk",
    "image/png",
    "<img\x20src=",
    "querySelector",
    "/news.json",
    "4545480RCYFpt",
    "<div\x20class=\x22container-",
    "behavior",
    "smooth",
    "\x22\x20class=\x22btn\x20btn-outline-secondary\x20link-",
    "#sign-employee",
    "\x22\x20style=\x22display:\x20none;\x22><button\x20id=\x22",
    "display",
    ".wrapper",
    ".post-title",
    "\x22\x20class=\x22delete\x20btn\x20btn-outline-secondary\x22\x20type=\x22button\x22\x20style=\x22width:\x20100px;\x22>Usuń</button>\x0a</div><div\x20class=\x22input-group\x20mb-3\x20form\x22>\x0a<textarea\x20type=\x22text\x22\x20id=\x22update-",
    "/access",
    "utils",
    "#check-btn",
    ".news",
    "preventDefault",
    "then",
    "#application-value",
    "\x22\x20class=\x22btn\x20btn-outline-secondary\x20bold-",
    "\x22\x20readonly>\x0a\x20\x20<button\x20id=\x22",
    "#submit-btn",
    "#submitBtn",
    "/faq",
    "</a>",
    "jednorg",
    "insertAdjacentHTML",
    "Sheets",
    "<b>Tutaj\x20wstaw\x20tekst</b>",
    "<em></p><p\x20class=\x22text-center\x20m-1\x22\x20style=\x22font-size:15px;\x22>Data:\x20",
    "</textarea>\x0a<button\x20id=\x22",
    "<em>Tutaj\x20wstaw\x20tekst</em>",
    "\x20mb-3\x20me-3\x22\x20type=\x22button\x22\x20style=\x22width:\x20150px;\x22>Kolor</button></buttons>",
    "712AQxQGz",
    "#alert-kids-quantity",
    "<b><span\x20class=\x22text-danger\x22>Tutaj\x20wstaw\x20tekst</span></b>",
    "#sname",
    "toLowerCase",
    "#date",
    "#unit",
    "map",
    "height",
  ];
  _0x40be = function () {
    return _0x19b91b;
  };
  return _0x40be();
}
