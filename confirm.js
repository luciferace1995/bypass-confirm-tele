                        let confirmBtn = [...document.querySelectorAll("button")].filter(a => a.innerText.toLowerCase() == "confirm")?.pop();
                        if (confirmBtn) {
                            ['mousedown', 'click', 'mouseup'].forEach((eventType) => {
                                confirmBtn.dispatchEvent(
                                    new MouseEvent(eventType, {
                                        view: window,
                                        bubbles: true,
                                        cancelable: true,
                                        buttons: 1
                                    })
                                );
                            });

                            break;
                        }
                    } catch (e) {
                    }
                }
