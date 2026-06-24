# NVR Integration — Open Questions

Fill in as you collect answers. We'll use these to choose the VMS adapter
and decide between pre-extracted clips, on-demand pull, or hybrid playback.

- [ ] **NVR brand + model** (firmware version if known) — mock data mentions "Maxpro", likely Honeywell MAXPRO NVR
  - Answer:

- [ ] **ONVIF Profile G support** enabled in the NVR admin panel?
  - Answer:

- [ ] **Network reachability** — will the Node backend run on the same LAN as the NVR, or remote (VPN / port forwarding)?
  - Answer:

- [ ] **Recording retention window** (e.g. 7 days, 30 days)
  - Answer:

- [ ] **Architecture preference** — pre-extracted clips, on-demand pull from NVR, or hybrid?
  - Answer:

---

**Fallback if NVR isn't available yet**: stand up a local MediaMTX container that fakes an RTSP camera with a looping test video — lets us build the full pipeline (adapter → ffmpeg → HLS → widget) before real hardware arrives.
