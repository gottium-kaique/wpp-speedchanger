const interval = setInterval(() => {
    const header = document.querySelector("._1QUKR")
    if (header) {
        clearInterval(interval)
        const numbers = [2,3,4,5]

        numbers.map(item => {
            let button = document.createElement("button")
            button.innerHTML = `${item}x`
            button.onclick = () => {
                const intervalAudio = setInterval(() => {
                    const audios = document.querySelectorAll("audio")
                    if (audios) {
                        clearInterval(intervalAudio)
                        audios.forEach(audio => audio.playbackRate = item)
                    }
                }, 100)
            }

            button.classList.add("twoTimesButton")

            header.appendChild(button)
        })
    }
}, 100)