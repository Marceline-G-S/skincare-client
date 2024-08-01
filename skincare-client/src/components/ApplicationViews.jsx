import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authorized } from "./Authorized";
import { Login } from "../pages/Login.jsx";
import { Register } from '../pages/Register.jsx';
import { SkinTypeSelector } from '../pages/skintype.jsx';
import { SkinConcernSelector } from "../pages/concerns.jsx";
import { JournalEntriesPage } from "../pages/journal.jsx";
import { EditJournalEntryPage } from "../pages/EditJournalEntryPage.jsx";
import { Home } from "../pages/Home.jsx";
import { NotAuthorized } from "./NotAuthorized.jsx";
import { SkincareOverview } from "../pages/SkincareOverview.jsx"; 
import { FiveStepsOfSkincare } from "../pages/FiveStepsOfSkincare.jsx";
import { BuildRoutine } from "../pages/BuildRoutine.jsx"; 
import { TrackRoutine } from "../pages/TrackRoutine.jsx";

export const ApplicationViews = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<NotAuthorized />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/skincare-overview" element={<SkincareOverview />} />
                    <Route path="/five-steps-of-skincare" element={<FiveStepsOfSkincare />} />
                    <Route path="/build-routine" element={<BuildRoutine />} />
                    <Route path="/track-routine" element={<TrackRoutine />} />
                </Route>
                <Route element={<Authorized />}>
                    <Route path="/skintype" element={<SkinTypeSelector />} />
                    <Route path="/concerns" element={<SkinConcernSelector />} />
                    <Route path="/journal" element={<JournalEntriesPage />} />
                    <Route path="/edit-entry/:id" element={<EditJournalEntryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
