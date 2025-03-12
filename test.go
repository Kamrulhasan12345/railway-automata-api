package main

import (
  "flag"
  "fmt"
  "io/ioutil"
  "log"
  "net/http"

  "golang.org/x/net/proxy"
)

func main() {
  target := flag.String("target", "https://railspaapi.shohoz.com/v1.0/web/handshake", "URL to get")
  proxyAddr := flag.String("proxy", "103.179.124.10:1080", "SOCKS5 proxy address to use")
  flag.Parse()

  dialer, err := proxy.SOCKS5("tcp", *proxyAddr, nil, nil)
  if err != nil {
    log.Fatal(err)
  }

  client := &http.Client{
    Transport: &http.Transport{
      Dial: dialer.Dial,
    },
  }

  r, err := client.Get(*target)
  if err != nil {
    log.Fatal(err)
  }
  defer r.Body.Close()
  body, err := ioutil.ReadAll(r.Body)
  if err != nil {
    log.Fatal(err)
  }
  fmt.Println(string(body))
}