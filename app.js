const spreadsheetId = '1hntUj1x8ZXC4A9JOhv1bGSf_Ot3oOvKlI_zyqwiDGXE';
fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`)
    .then(res => res.text())
    .then(text => {
        const json = JSON.parse(text.substr(47).slice(0, -2));
        const tabela = json.table.rows;
        for (let i = 0; i < tabela.length; i++) {
            document.querySelector('#dados').innerHTML += `<div style="padding:10px;box-shadow:0 0 2px .5px black">${tabela[i].c[0].v}, ${tabela[i].c[1].v}, ${tabela[i].c[2].v}</div>`
        }
    })