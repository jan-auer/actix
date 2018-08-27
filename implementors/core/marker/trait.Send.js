(function() {var implementors = {};
implementors["actix"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.SpawnHandle.html\" title=\"struct actix::SpawnHandle\">SpawnHandle</a>",synthetic:true,types:["actix::actor::SpawnHandle"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.Addr.html\" title=\"struct actix::Addr\">Addr</a>&lt;A&gt;",synthetic:true,types:["actix::address::Addr"]},{text:"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.Recipient.html\" title=\"struct actix::Recipient\">Recipient</a>&lt;M&gt;",synthetic:true,types:["actix::address::Recipient"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.Arbiter.html\" title=\"struct actix::Arbiter\">Arbiter</a>",synthetic:true,types:["actix::arbiter::Arbiter"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.Context.html\" title=\"struct actix::Context\">Context</a>&lt;A&gt;",synthetic:true,types:["actix::context::Context"]},{text:"impl&lt;A, I, E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.ActorResponse.html\" title=\"struct actix::ActorResponse\">ActorResponse</a>&lt;A, I, E&gt;",synthetic:true,types:["actix::handler::ActorResponse"]},{text:"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.MessageResult.html\" title=\"struct actix::MessageResult\">MessageResult</a>&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as <a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a>&gt;::<a class=\"type\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::handler::MessageResult"]},{text:"impl&lt;I, E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.Response.html\" title=\"struct actix::Response\">Response</a>&lt;I, E&gt;",synthetic:true,types:["actix::handler::Response"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.Supervisor.html\" title=\"struct actix::Supervisor\">Supervisor</a>&lt;A&gt;",synthetic:true,types:["actix::supervisor::Supervisor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.System.html\" title=\"struct actix::System\">System</a>",synthetic:true,types:["actix::system::System"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/struct.SystemRunner.html\" title=\"struct actix::SystemRunner\">SystemRunner</a>",synthetic:true,types:["actix::system::SystemRunner"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/enum.ActorState.html\" title=\"enum actix::ActorState\">ActorState</a>",synthetic:true,types:["actix::actor::ActorState"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/enum.Running.html\" title=\"enum actix::Running\">Running</a>",synthetic:true,types:["actix::actor::Running"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/enum.MailboxError.html\" title=\"enum actix::MailboxError\">MailboxError</a>",synthetic:true,types:["actix::address::MailboxError"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/struct.ContextParts.html\" title=\"struct actix::dev::ContextParts\">ContextParts</a>&lt;A&gt;",synthetic:true,types:["actix::contextimpl::ContextParts"]},{text:"impl&lt;A, C&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/struct.ContextFut.html\" title=\"struct actix::dev::ContextFut\">ContextFut</a>&lt;A, C&gt;",synthetic:true,types:["actix::contextimpl::ContextFut"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/prelude/enum.SendError.html\" title=\"enum actix::prelude::SendError\">SendError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::address::SendError"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/struct.Envelope.html\" title=\"struct actix::dev::Envelope\">Envelope</a>&lt;A&gt;",synthetic:true,types:["actix::address::envelope::Envelope"]},{text:"impl&lt;A, M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.Request.html\" title=\"struct actix::prelude::Request\">Request</a>&lt;A, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as <a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a>&gt;::<a class=\"type\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::address::message::Request"]},{text:"impl&lt;M&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/prelude/struct.RecipientRequest.html\" title=\"struct actix::prelude::RecipientRequest\">RecipientRequest</a>&lt;M&gt;",synthetic:true,types:["actix::address::message::RecipientRequest"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/dev/struct.Mailbox.html\" title=\"struct actix::dev::Mailbox\">Mailbox</a>&lt;A&gt;",synthetic:true,types:["actix::mailbox::Mailbox"]},{text:"impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/mocker/struct.Mocker.html\" title=\"struct actix::actors::mocker::Mocker\">Mocker</a>&lt;T&gt;",synthetic:true,types:["actix::actors::mocker::Mocker"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.Resolve.html\" title=\"struct actix::actors::resolver::Resolve\">Resolve</a>",synthetic:true,types:["actix::actors::resolver::Resolve"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.Connect.html\" title=\"struct actix::actors::resolver::Connect\">Connect</a>",synthetic:true,types:["actix::actors::resolver::Connect"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.ConnectAddr.html\" title=\"struct actix::actors::resolver::ConnectAddr\">ConnectAddr</a>",synthetic:true,types:["actix::actors::resolver::ConnectAddr"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.Resolver.html\" title=\"struct actix::actors::resolver::Resolver\">Resolver</a>",synthetic:true,types:["actix::actors::resolver::Resolver"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/resolver/struct.TcpConnector.html\" title=\"struct actix::actors::resolver::TcpConnector\">TcpConnector</a>",synthetic:true,types:["actix::actors::resolver::TcpConnector"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/actors/resolver/enum.ResolverError.html\" title=\"enum actix::actors::resolver::ResolverError\">ResolverError</a>",synthetic:true,types:["actix::actors::resolver::ResolverError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/signal/struct.Signal.html\" title=\"struct actix::actors::signal::Signal\">Signal</a>",synthetic:true,types:["actix::actors::signal::Signal"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/signal/struct.ProcessSignals.html\" title=\"struct actix::actors::signal::ProcessSignals\">ProcessSignals</a>",synthetic:true,types:["actix::actors::signal::ProcessSignals"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/signal/struct.Subscribe.html\" title=\"struct actix::actors::signal::Subscribe\">Subscribe</a>",synthetic:true,types:["actix::actors::signal::Subscribe"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/actors/signal/struct.DefaultSignalsHandler.html\" title=\"struct actix::actors::signal::DefaultSignalsHandler\">DefaultSignalsHandler</a>",synthetic:true,types:["actix::actors::signal::DefaultSignalsHandler"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/actors/signal/enum.SignalType.html\" title=\"enum actix::actors::signal::SignalType\">SignalType</a>",synthetic:true,types:["actix::actors::signal::SignalType"]},{text:"impl&lt;A, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.AndThen.html\" title=\"struct actix::fut::AndThen\">AndThen</a>&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.IntoActorFuture.html#associatedtype.Future\" title=\"type actix::fut::IntoActorFuture::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::and_then::AndThen"]},{text:"impl&lt;A, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.FromErr.html\" title=\"struct actix::fut::FromErr\">FromErr</a>&lt;A, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::from_err::FromErr"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.Finish.html\" title=\"struct actix::fut::Finish\">Finish</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::helpers::Finish"]},{text:"impl&lt;A, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.Map.html\" title=\"struct actix::fut::Map\">Map</a>&lt;A, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::map::Map"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.DropErr.html\" title=\"struct actix::fut::DropErr\">DropErr</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::map_err::DropErr"]},{text:"impl&lt;A, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.MapErr.html\" title=\"struct actix::fut::MapErr\">MapErr</a>&lt;A, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::map_err::MapErr"]},{text:"impl&lt;T, E, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.FutureResult.html\" title=\"struct actix::fut::FutureResult\">FutureResult</a>&lt;T, E, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::result::FutureResult"]},{text:"impl&lt;S, F, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamAndThen.html\" title=\"struct actix::fut::StreamAndThen\">StreamAndThen</a>&lt;S, F, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.IntoActorFuture.html#associatedtype.Future\" title=\"type actix::fut::IntoActorFuture::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_and_then::StreamAndThen"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamFinish.html\" title=\"struct actix::fut::StreamFinish\">StreamFinish</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_finish::StreamFinish"]},{text:"impl&lt;S, F, Fut, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamFold.html\" title=\"struct actix::fut::StreamFold\">StreamFold</a>&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Fut as <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.IntoActorFuture.html#associatedtype.Future\" title=\"type actix::fut::IntoActorFuture::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_fold::StreamFold"]},{text:"impl&lt;S, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamMap.html\" title=\"struct actix::fut::StreamMap\">StreamMap</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_map::StreamMap"]},{text:"impl&lt;S, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamMapErr.html\" title=\"struct actix::fut::StreamMapErr\">StreamMapErr</a>&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_map_err::StreamMapErr"]},{text:"impl&lt;S, F, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamThen.html\" title=\"struct actix::fut::StreamThen\">StreamThen</a>&lt;S, F, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.IntoActorFuture.html#associatedtype.Future\" title=\"type actix::fut::IntoActorFuture::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_then::StreamThen"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamTimeout.html\" title=\"struct actix::fut::StreamTimeout\">StreamTimeout</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as <a class=\"trait\" href=\"actix/fut/trait.ActorStream.html\" title=\"trait actix::fut::ActorStream\">ActorStream</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.ActorStream.html#associatedtype.Error\" title=\"type actix::fut::ActorStream::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::stream_timeout::StreamTimeout"]},{text:"impl&lt;A, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.Then.html\" title=\"struct actix::fut::Then\">Then</a>&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.IntoActorFuture.html#associatedtype.Future\" title=\"type actix::fut::IntoActorFuture::Future\">Future</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::then::Then"]},{text:"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.Timeout.html\" title=\"struct actix::fut::Timeout\">Timeout</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as <a class=\"trait\" href=\"actix/fut/trait.ActorFuture.html\" title=\"trait actix::fut::ActorFuture\">ActorFuture</a>&gt;::<a class=\"type\" href=\"actix/fut/trait.ActorFuture.html#associatedtype.Error\" title=\"type actix::fut::ActorFuture::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::timeout::Timeout"]},{text:"impl&lt;F, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.FutureWrap.html\" title=\"struct actix::fut::FutureWrap\">FutureWrap</a>&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::FutureWrap"]},{text:"impl&lt;S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/fut/struct.StreamWrap.html\" title=\"struct actix::fut::StreamWrap\">StreamWrap</a>&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::StreamWrap"]},{text:"impl&lt;A, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"actix/fut/enum.Either.html\" title=\"enum actix::fut::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["actix::fut::either::Either"]},{text:"impl&lt;T, E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/io/struct.Writer.html\" title=\"struct actix::io::Writer\">Writer</a>&lt;T, E&gt;",synthetic:true,types:["actix::io::Writer"]},{text:"impl&lt;T, U&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/io/struct.FramedWrite.html\" title=\"struct actix::io::FramedWrite\">FramedWrite</a>&lt;T, U&gt;",synthetic:true,types:["actix::io::FramedWrite"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/msgs/struct.StopArbiter.html\" title=\"struct actix::msgs::StopArbiter\">StopArbiter</a>",synthetic:true,types:["actix::msgs::StopArbiter"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/msgs/struct.StartActor.html\" title=\"struct actix::msgs::StartActor\">StartActor</a>&lt;A&gt;",synthetic:true,types:["actix::msgs::StartActor"]},{text:"impl&lt;I, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/msgs/struct.Execute.html\" title=\"struct actix::msgs::Execute\">Execute</a>&lt;I, E&gt;",synthetic:true,types:["actix::msgs::Execute"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/registry/struct.Registry.html\" title=\"struct actix::registry::Registry\">Registry</a>",synthetic:true,types:["actix::registry::Registry"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/registry/struct.SystemRegistry.html\" title=\"struct actix::registry::SystemRegistry\">SystemRegistry</a>",synthetic:true,types:["actix::registry::SystemRegistry"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/sync/struct.SyncArbiter.html\" title=\"struct actix::sync::SyncArbiter\">SyncArbiter</a>&lt;A&gt;",synthetic:true,types:["actix::sync::SyncArbiter"]},{text:"impl&lt;A&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/sync/struct.SyncContext.html\" title=\"struct actix::sync::SyncContext\">SyncContext</a>&lt;A&gt;",synthetic:true,types:["actix::sync::SyncContext"]},{text:"impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"actix/utils/struct.Condition.html\" title=\"struct actix::utils::Condition\">Condition</a>&lt;T&gt;",synthetic:true,types:["actix::utils::Condition"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
