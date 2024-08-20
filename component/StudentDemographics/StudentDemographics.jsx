import Link from "next/link";
import React, { startTransition, useEffect, useState } from "react";

const StudentDemographics = () => {
  const [nurCasteO, setNurCasteO] = useState(0);
  const [nurCasteG, setNurCasteG] = useState(0);
  const [nurCasteS, setNurCasteS] = useState(0);
  const [nurCasteT, setNurCasteT] = useState(0);

  const [PrepCasteO, setPrepCasteO] = useState(0);
  const [PrepCasteG, setPrepCasteG] = useState(0);
  const [PrepCasteS, setPrepCasteS] = useState(0);
  const [PrepCasteT, setPrepCasteT] = useState(0);

  const [KGCasteO, setKGCasteO] = useState(0);
  const [KGCasteG, setKGCasteG] = useState(0);
  const [KGCasteS, setKGCasteS] = useState(0);
  const [KGCasteT, setKGCasteT] = useState(0);

  const [OneCasteO, setOneCasteO] = useState(0);
  const [OneCasteG, setOneCasteG] = useState(0);
  const [OneCasteS, setOneCasteS] = useState(0);
  const [OneCasteT, setOneCasteT] = useState(0);

  const [TwoCasteO, setTwoCasteO] = useState(0);
  const [TwoCasteG, setTwoCasteG] = useState(0);
  const [TwoCasteS, setTwoCasteS] = useState(0);
  const [TwoCasteT, setTwoCasteT] = useState(0);

  const [ThreeCasteO, setThreeCasteO] = useState(0);
  const [ThreeCasteG, setThreeCasteG] = useState(0);
  const [ThreeCasteS, setThreeCasteS] = useState(0);
  const [ThreeCasteT, setThreeCasteT] = useState(0);

  const [FourCasteO, setFourCasteO] = useState(0);
  const [FourCasteG, setFourCasteG] = useState(0);
  const [FourCasteS, setFourCasteS] = useState(0);
  const [FourCasteT, setFourCasteT] = useState(0);

  const [FiveCasteO, setFiveCasteO] = useState(0);
  const [FiveCasteG, setFiveCasteG] = useState(0);
  const [FiveCasteS, setFiveCasteS] = useState(0);
  const [FiveCasteT, setFiveCasteT] = useState(0);

  const [SixCasteO, setSixCasteO] = useState(0);
  const [SixCasteG, setSixCasteG] = useState(0);
  const [SixCasteS, setSixCasteS] = useState(0);
  const [SixCasteT, setSixCasteT] = useState(0);

  const [SevenCasteO, setSevenCasteO] = useState(0);
  const [SevenCasteG, setSevenCasteG] = useState(0);
  const [SevenCasteS, setSevenCasteS] = useState(0);
  const [SevenCasteT, setSevenCasteT] = useState(0);

  const [EightCasteO, setEightCasteO] = useState(0);
  const [EightCasteG, setEightCasteG] = useState(0);
  const [EightCasteS, setEightCasteS] = useState(0);
  const [EightCasteT, setEightCasteT] = useState(0);

  const [NineCasteO, setNineCasteO] = useState(0);
  const [NineCasteG, setNineCasteG] = useState(0);
  const [NineCasteS, setNineCasteS] = useState(0);
  const [NineCasteT, setNineCasteT] = useState(0);

  const [TenCasteO, setTenCasteO] = useState(0);
  const [TenCasteG, setTenCasteG] = useState(0);
  const [TenCasteS, setTenCasteS] = useState(0);
  const [TenCasteT, setTenCasteT] = useState(0);

  const apiData = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    const obc = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === "NURSERY"
    );
    const gen = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === "NURSERY"
    );
    const sc = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === "NURSERY"
    );
    const st = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === "NURSERY"
    );

    // kg
    const obcKG = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === "KG"
    );
    const genKG = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === "KG"
    );
    const scKG = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === "KG"
    );
    const stKG = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === "KG"
    );

    // kg end

    // prep

    const obcPREP = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === "PREP"
    );
    const genPREP = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === "PREP"
    );
    const scPREP = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === "PREP"
    );
    const stPREP = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === "PREP"
    );
    // prep end

    // one start

    const obc1 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 1
    );
    const gen1 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 1
    );
    const sc1 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 1
    );
    const st1 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 1
    );

    // one end

    // two start
    const obc2 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 2
    );
    const gen2 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 2
    );
    const sc2 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 2
    );
    const st2 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 2
    );
    // two end

    // three
    const obc3 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 3
    );
    const gen3 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 3
    );
    const sc3 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 3
    );
    const st3 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 3
    );

    // three end
    // four start

    const obc4 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 4
    );
    const gen4 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 4
    );
    const sc4 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 4
    );
    const st4 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 4
    );
    // foue end

    // five start
    const obc5 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 5
    );
    const gen5 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 5
    );
    const sc5 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 5
    );
    const st5 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 5
    );

    // five end

    // six start
    const obc6 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 6
    );
    const gen6 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 6
    );
    const sc6 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 6
    );
    const st6 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 6
    );

    // six end
    // seven start

    const obc7 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 7
    );
    const gen7 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 7
    );
    const sc7 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 7
    );
    const st7 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 7
    );
    // seven end

    // eight start
    const obc8 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 8
    );
    const gen8 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 8
    );
    const sc8 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 8
    );
    const st8 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 8
    );

    // eight end

    // nine start

    const obc9 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 9
    );
    const gen9 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 9
    );
    const sc9 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 9
    );
    const st9 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 9
    );
    // nine end

    // ten start
    const obc10 = data.filter(
      (item) => item.CATOGERY === "OBC" && item.CLASS === 10
    );
    const gen10 = data.filter(
      (item) => item.CATOGERY === "GEN" && item.CLASS === 10
    );
    const sc10 = data.filter(
      (item) => item.CATOGERY === "SC" && item.CLASS === 10
    );
    const st10 = data.filter(
      (item) => item.CATOGERY === "ST" && item.CLASS === 10
    );

    // ten end

    // nur
    setNurCasteG(gen.length);
    setNurCasteO(obc.length);
    setNurCasteS(sc.length);
    setNurCasteT(st.length);
    // nur end
    setPrepCasteG(genPREP.length);
    setPrepCasteO(obcPREP.length);
    setPrepCasteS(scPREP.length);
    setPrepCasteT(stPREP.length);

    setKGCasteG(genKG.length);
    setKGCasteO(obcKG.length);
    setKGCasteS(scKG.length);
    setKGCasteT(stKG.length);

    setOneCasteG(gen1.length);
    setOneCasteO(obc1.length);
    setOneCasteS(sc1.length);
    setOneCasteT(st1.length);

    setTwoCasteG(gen2.length);
    setTwoCasteO(obc2.length);
    setTwoCasteS(sc2.length);
    setTwoCasteT(st2.length);

    setThreeCasteG(gen3.length);
    setThreeCasteO(obc3.length);
    setThreeCasteS(sc3.length);
    setThreeCasteT(st3.length);

    setFourCasteG(gen4.length);
    setFourCasteO(obc4.length);
    setFourCasteS(sc4.length);
    setFourCasteT(st4.length);

    setFiveCasteG(gen5.length);
    setFiveCasteO(obc5.length);
    setFiveCasteS(sc5.length);
    setFiveCasteT(st5.length);

    setSixCasteG(gen6.length);
    setSixCasteO(obc6.length);
    setSixCasteS(sc6.length);
    setSixCasteT(st6.length);

    setSevenCasteG(gen7.length);
    setSevenCasteO(obc7.length);
    setSevenCasteS(sc7.length);
    setSevenCasteT(st7.length);

    setEightCasteG(gen8.length);
    setEightCasteO(obc8.length);
    setEightCasteS(sc8.length);
    setEightCasteT(st8.length);

    setNineCasteG(gen9.length);
    setNineCasteO(obc9.length);
    setNineCasteS(sc9.length);
    setNineCasteT(st9.length);

    setTenCasteG(gen10.length);
    setTenCasteO(obc10.length);
    setTenCasteS(sc10.length);
    setTenCasteT(st10.length);
  };
  useEffect(() => {
    apiData();
  }, []);
  return (
    <div>
      <Link href="/schoolmodulesandfacalitiesdetail">
        <button className="btn_submit">Back</button>
      </Link>
      <h2>Student Demographics</h2>
      <table id="customers">
        <thead>
          <tr>
            <th>Class/Section</th>
            <th>OBC</th>
            <th>GENERAL</th>
            <th>SC</th>
            <th>ST</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NURSERY</td>
            <td>{nurCasteO}</td>
            <td>{nurCasteG}</td>
            <td>{nurCasteS}</td>
            <td>{nurCasteT}</td>
          </tr>
          <tr>
            <td>KG</td>
            <td>{KGCasteO}</td>
            <td>{KGCasteG}</td>
            <td>{KGCasteS}</td>
            <td>{KGCasteT}</td>
          </tr>
          <tr>
            <td>PREP</td>
            <td>{PrepCasteO}</td>
            <td>{PrepCasteG}</td>
            <td>{PrepCasteS}</td>
            <td>{PrepCasteT}</td>
          </tr>
          <tr>
            <td>One</td>
            <td>{OneCasteO}</td>
            <td>{OneCasteG}</td>
            <td>{OneCasteS}</td>
            <td>{OneCasteT}</td>
          </tr>
          <tr>
            <td>Two</td>
            <td>{TwoCasteO}</td>
            <td>{TwoCasteG}</td>
            <td>{TwoCasteS}</td>
            <td>{TwoCasteT}</td>
          </tr>
          <tr>
            <td>Three</td>
            <td>{ThreeCasteO}</td>
            <td>{ThreeCasteG}</td>
            <td>{ThreeCasteS}</td>
            <td>{ThreeCasteT}</td>
          </tr>
          <tr>
            <td>Four</td>
            <td>{FourCasteO}</td>
            <td>{FourCasteG}</td>
            <td>{FourCasteS}</td>
            <td>{FourCasteT}</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>{FiveCasteO}</td>
            <td>{FiveCasteG}</td>
            <td>{FiveCasteS}</td>
            <td>{FiveCasteT}</td>
          </tr>
          <tr>
            <td>Six</td>
            <td>{SixCasteO}</td>
            <td>{SixCasteG}</td>
            <td>{SixCasteS}</td>
            <td>{SixCasteT}</td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>{SevenCasteO}</td>
            <td>{SevenCasteG}</td>
            <td>{SevenCasteS}</td>
            <td>{SevenCasteT}</td>
          </tr>
          <tr>
            <td>Eight</td>
            <td>{EightCasteO}</td>
            <td>{EightCasteG}</td>
            <td>{EightCasteS}</td>
            <td>{EightCasteT}</td>
          </tr>
          <tr>
            <td>Nine</td>
            <td>{NineCasteO}</td>
            <td>{NineCasteG}</td>
            <td>{NineCasteS}</td>
            <td>{NineCasteT}</td>
          </tr>
          <tr>
            <td>Ten</td>
            <td>{TenCasteO}</td>
            <td>{TenCasteG}</td>
            <td>{TenCasteS}</td>
            <td>{TenCasteT}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentDemographics;
