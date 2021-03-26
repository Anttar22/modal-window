function _createModal(options) {
    const DEFAULT_WIDTH = '500px'
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal__overlay" data-close="true">
            <div class="modal__window" style="width: ${options.width || DEFAULT_WIDTH}">
                <div class="modal__header">
                    <h3>${options.title || 'Окно'}</h3>
                    ${options.closable ? `<span class="modal__close" data-close="true">&times;</span>` : ''}
                    
                </div>
                <div class="modal__content">${options.content || ''}</div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
}


$.modal = function (options) {
    const $modal = _createModal(options)
    let destroyed = false

    const modal = {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
        },
    }

    const listener = e => {
        if (e.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)


    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true

        }
    })
}