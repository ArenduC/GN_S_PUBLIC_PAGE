import React, { useState } from 'react';
import { ShieldCheck, Lock, HardDrive, Check, Copy, ExternalLink, Mail, EyeOff, Smartphone, Award, FileText } from 'lucide-react';

export const PrivacyPolicySection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Generate current origin link or clean privacy anchor link
  const getPrivacyUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}${window.location.pathname}#privacy`;
    }
    return 'https://ais-pre-owg55hpddz5vonfuu6r557-773172488993.asia-southeast1.run.app#privacy';
  };

  const handleCopyLink = () => {
    const url = getPrivacyUrl();
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Google Play Console Ready Banner */}
      <div className="mb-10 rounded-2xl bg-gradient-to-r from-rose-950/40 via-neutral-900/90 to-rose-950/30 border border-rose-500/40 p-5 sm:p-6 shadow-[0_0_30px_rgba(244,63,94,0.15)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0 text-rose-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 uppercase tracking-wider font-mono">
                  Google Play Console Compliant
                </span>
                <span className="text-xs text-neutral-400">Policy Standard 2026</span>
              </div>
              <h2 className="text-lg font-bold text-white mt-1">
                Official Privacy Policy for Google Play Store Listing
              </h2>
              <p className="text-sm text-neutral-300 mt-0.5">
                Paste this direct URL into your Google Play Console under <span className="text-rose-300 font-mono text-xs">Policy and Programs &gt; App Content &gt; Privacy Policy</span>.
              </p>
            </div>
          </div>

          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-medium text-sm transition-all shadow-lg shadow-rose-950/50 cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span className="text-emerald-100">Copied URL to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Play Console URL</span>
              </>
            )}
          </button>
        </div>

        {/* Current URL preview box */}
        <div className="mt-4 pt-3 border-t border-rose-900/30 flex items-center gap-2 text-xs text-neutral-400 font-mono overflow-x-auto">
          <span className="text-rose-400 shrink-0 font-semibold">Direct Listing URL:</span>
          <span className="text-neutral-300 bg-neutral-950/80 px-2 py-1 rounded border border-neutral-800 break-all select-all">
            {typeof window !== 'undefined' ? getPrivacyUrl() : 'Loading URL...'}
          </span>
        </div>
      </div>

      {/* Main Privacy Document */}
      <div className="bg-[#12131a] rounded-3xl border border-neutral-800 p-6 sm:p-10 shadow-2xl space-y-8">
        {/* Document Header */}
        <div className="border-b border-neutral-800 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400 font-mono mb-2">
            <span>APP: <strong className="text-white">Sudora - Elegant Sudoku & Puzzle Organizer</strong></span>
            <span>DEVELOPER: <strong className="text-rose-400">Graphynovus</strong></span>
            <span>LAST UPDATED: <strong className="text-white">October 10, 2026</strong></span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
            This Privacy Policy applies to the mobile software application <strong className="text-white">Sudora</strong> (herein referred to as "the App" or "Sudora"), developed and operated by <strong className="text-white">Graphynovus</strong> (Contact: <a href="mailto:arenduchanda1997@gmail.com" className="text-rose-400 underline">arenduchanda1997@gmail.com</a>).
          </p>
        </div>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-[#181924] border border-rose-950/60">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-2">
              <EyeOff className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-white">0% Data Collected</h3>
            <p className="text-xs text-neutral-400 mt-1">
              We do not collect, transmit, share, or sell any personal data, identifiers, or analytics.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#181924] border border-rose-950/60">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-2">
              <HardDrive className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-white">100% Local Storage</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Your generated games, custom puzzles, and solving stats are saved strictly on your local device.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#181924] border border-rose-950/60">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-2">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-white">Offline by Architecture</h3>
            <p className="text-xs text-neutral-400 mt-1">
              Sudora operates entirely without network access, third-party ad networks, or telemetry trackers.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-mono">01</span>
            Data Collection and Usage
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>
              Sudora was deliberately engineered with privacy as a foundational principle. 
              <strong> We do NOT collect, gather, track, log, or transmit any Personally Identifiable Information (PII) or device metrics</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400 text-xs sm:text-sm">
              <li><strong>No Personal Identifiers:</strong> We do not ask for or collect names, email addresses, phone numbers, postal addresses, or user account logins.</li>
              <li><strong>No Location Data:</strong> The App does not access, collect, or monitor precise or coarse geographic location.</li>
              <li><strong>No Device or Hardware Identifiers:</strong> We do not collect Android Advertising IDs (AAID), IMEI, MAC addresses, or SIM identifiers.</li>
              <li><strong>No Sensor or Biometric Data:</strong> The App does not access camera, microphone, motion sensors, contacts, or calendar entries.</li>
            </ul>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-mono">02</span>
            Local Device Storage &amp; Persistence
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>
              To offer features such as saving custom Sudoku boards, pausing/resuming gameplay, and tracking completion times, the App saves non-personal game state files directly within the local, sandboxed storage provided by the Android Operating System (via Room/SQLite and Jetpack DataStore):
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400 text-xs sm:text-sm">
              <li>Auto-generated puzzle grids, difficulty selections, and seed values.</li>
              <li>User-created custom 4x4, 6x6, and 9x9 puzzles entered manually.</li>
              <li>In-progress cell entries, pencil notes, elapsed timer counters, and pause states.</li>
              <li>App preferences (Dark mode theme preference, note-taking toggles, sound settings).</li>
            </ul>
            <p className="text-neutral-400 text-xs italic">
              All of this data remains isolated in your device's private app directory and is never synchronized to cloud servers or accessible by third parties.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-mono">03</span>
            Third-Party Services and Advertising
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>
              Unlike conventional puzzle apps, Sudora is designed as an ad-free, respectful utility:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400 text-xs sm:text-sm">
              <li><strong>No Ad Networks:</strong> Sudora does not incorporate Google AdMob, Unity Ads, AppLovin, or any other commercial ad monetization SDKs.</li>
              <li><strong>No Analytics SDKs:</strong> Sudora does not integrate Firebase Analytics, Mixpanel, Google Analytics for Firebase, AppsFlyer, or Flurry.</li>
              <li><strong>No Social Logins:</strong> There is no Facebook Login, Sign in with Google, or other third-party authentication requirement.</li>
            </ul>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-mono">04</span>
            Android Permissions Disclosures
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>
              In accordance with Google Play's Permissions policy, Sudora adheres strictly to the principle of least privilege:
            </p>
            <div className="overflow-x-auto rounded-xl border border-neutral-800">
              <table className="min-w-full divide-y divide-neutral-800 text-xs font-mono">
                <thead className="bg-[#181924]">
                  <tr>
                    <th className="px-4 py-2.5 text-left text-neutral-300 font-semibold">Permission</th>
                    <th className="px-4 py-2.5 text-left text-neutral-300 font-semibold">Status</th>
                    <th className="px-4 py-2.5 text-left text-neutral-300 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800 bg-[#12131a]">
                  <tr>
                    <td className="px-4 py-2 text-rose-400 font-semibold">android.permission.INTERNET</td>
                    <td className="px-4 py-2 text-neutral-400">Not Required / Unused</td>
                    <td className="px-4 py-2 text-neutral-400">App operates 100% offline.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-rose-400 font-semibold">READ_EXTERNAL_STORAGE</td>
                    <td className="px-4 py-2 text-neutral-400">Not Requested</td>
                    <td className="px-4 py-2 text-neutral-400">App only writes to its internal sandbox.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-rose-400 font-semibold">ACCESS_FINE_LOCATION</td>
                    <td className="px-4 py-2 text-neutral-400">Not Requested</td>
                    <td className="px-4 py-2 text-neutral-400">No geo-location used.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-rose-400 font-semibold">CAMERA / MICROPHONE</td>
                    <td className="px-4 py-2 text-neutral-400">Not Requested</td>
                    <td className="px-4 py-2 text-neutral-400">No media sensors required.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-mono">05</span>
            Children's Privacy (COPPA Compliance)
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed">
            <p>
              Sudora complies with the Children's Online Privacy Protection Act (COPPA) and Google Play's Families Policy. Because Sudora collects zero personal data from any user regardless of age, it is fully safe for players of all ages, including children under the age of 13.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-mono">06</span>
            Data Retention and User Deletion Rights
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed space-y-2">
            <p>
              Since all gameplay data is stored strictly on your device:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400 text-xs sm:text-sm">
              <li><strong>In-App Deletion:</strong> You can delete any saved game or custom puzzle directly from the "Saved Games" screen inside Sudora.</li>
              <li><strong>Device Clear Storage:</strong> You can wipe all app data at any time via Android Settings &gt; Apps &gt; Sudora &gt; Storage &gt; Clear Storage / Clear Data.</li>
              <li><strong>Uninstall:</strong> Uninstalling Sudora from your Android device immediately and irreversibly removes all local game files and preferences.</li>
            </ul>
          </div>
        </div>

        {/* Section 7 */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-mono">07</span>
            Contact Information &amp; Developer Inquiries
          </h2>
          <div className="text-neutral-300 text-sm leading-relaxed">
            <p>
              If you have any questions, comments, or compliance inquiries concerning this Privacy Policy or Sudora's data practices, please contact the developer directly:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-[#171822] border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-white font-medium text-sm">Developer: <span className="text-rose-400">Graphynovus</span> (Arendu Chanda)</p>
                <p className="text-neutral-400 text-xs mt-0.5">Primary Support &amp; Privacy Contact</p>
              </div>
              <a
                href="mailto:arenduchanda1997@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-mono bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 px-3 py-2 rounded-lg border border-rose-500/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                arenduchanda1997@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer verification note */}
        <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>Google Play Developer Policy Approved</span>
          <span>© 2026 Graphynovus. All Rights Reserved.</span>
        </div>
      </div>
    </section>
  );
};
