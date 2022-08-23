
async function getAllelesData() {
    try {
        let res = await fetch('https://www.ebi.ac.uk/cgi-bin/ipd/api/allele', {
            method: "GET",
        });
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function displayData() {
    let alleles = await getAllelesData();

    console.log(document.getElementById("table").innerHTML)
    alleles.data.forEach(allele => {
        let tableHTML = document.getElementById("table").innerHTML
        tableHTML = tableHTML + `<tr> 
            <td> ${allele.accession}
            </td>
            <td> ${allele.name}
            </td>
        </tr>`
        document.getElementById("table").innerHTML = tableHTML
    })
}

displayData();
