const FavoriteBands = () => {
    return (
        <><div class='headline'>
            <h1>Hello Everyone!</h1>
            <p>Below I listed my all time favorite bands by their genres. You'll notice that I enjoy a large number of subgenres!</p>
        </div>
            <div class="card">
                <div class='card-header'>Heavy Metal</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Ozzy Osbourne</li>
                    <li class="list-group-item">Judas Priest</li>
                    <li class="list-group-item">Van Halen</li>
                </ul>
            </div>
            <div class="card">
                <div class='card-header'>Thrash Metal</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Metallica</li>
                    <li class="list-group-item">Megadeth</li>
                    <li class="list-group-item">Slayer</li>
                </ul>
            </div>
            <div class="card">
                <div class='card-header'>Classic Rock</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Boston</li>
                    <li class="list-group-item">Tom Petty</li>
                    <li class="list-group-item">Lynyrd Skynyrd</li>
                </ul>
            </div>
            <div class="card">
                <div class='card-header'>Modern Metal</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Volbeat</li>
                    <li class="list-group-item">Trivium</li>
                    <li class="list-group-item">Lamb of God</li>
                </ul>
            </div>
            <div class="card">
                <div class='card-header'>Death Metal</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Death</li>
                    <li class="list-group-item">Obituary</li>
                    <li class="list-group-item">Cannibal Corpse</li>
                </ul>
            </div>
            <figure>
                <blockquote class="blockquote">
                    <p>Rock and Roll will never die!</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    <cite title="Source Title"> - unknown source</cite>
                </figcaption>
            </figure>
        </>
    )
}

export default FavoriteBands;